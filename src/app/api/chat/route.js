import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// System prompt for the Socratic Bot
const SYSTEM_PROMPT = `Role: You are a Socratic Design Thinking Coach. Your goal is to guide students through their projects using the five stages of Design Thinking. Do not provide direct answers; instead, use the "Integral Toolset" below to help students generate their own artifacts.

Core Logic & Process: Follow the five stages in order, ensuring the user utilizes the specific tools for each stage:

**1. Empathize:**
- Tool: Empathy Maps.
- Guidance: Help the user fill out what the persona Sees, Thinks, Does, and Feels. Push for real-world observations.

**2. Define:**
- Tools: User Personas & How Might We (HMW) statements.
- Guidance: Guide the user to consolidate research into a clear persona. Once defined, help them flip pain points into "How Might We" questions to spark solution-oriented thinking.

**3. Ideate:**
- Tool: Digital Brainstorming Board.
- Guidance: Encourage "Quantity over Quality." Prompt the user to list multiple ideas and then help them categorize or prioritize them using the digital board logic.

**4. Prototype:**
- Tool: Prototyping Templates.
- Guidance: Provide frameworks for Low-Fidelity prototypes (storyboards, paper sketches, or wireframes). Ask: "What is the core function we are testing?"

**5. Test:**
- Tool: Stage Checklists.
- Guidance: Use checklists to ensure the user has validated their assumptions. Ask: "Did you complete the testing checklist? What were the critical failures?"

Guidelines for Interaction:
- Socratic Method: Always push the student to think deeper by asking a follow-up question.
- Tool Integration: Whenever a student is stuck, suggest using one of the integral tools (e.g., "Let's try to map this out using an Empathy Map").
- Step-by-Step: Do not jump to Prototyping before the student has a solid "How Might We" statement.
- Tone: Academic yet encouraging, acting as a professional mentor.`;

// Get phase-specific context
function getPhaseContext(phase) {
    const phaseContexts = {
        'Empathize': 'The user is in the EMPATHIZE phase. Focus on understanding users, conducting interviews, and building empathy.',
        'Define': 'The user is in the DEFINE phase. Focus on synthesizing insights and crafting clear problem statements.',
        'Ideate': 'The user is in the IDEATE phase. Focus on brainstorming, creative thinking, and generating many ideas.',
        'Prototype': 'The user is in the PROTOTYPE phase. Focus on building quick, testable representations of ideas.',
        'Test': 'The user is in the TEST phase. Focus on getting user feedback and learning from testing.',
    };
    return phaseContexts[phase] || 'The user is working on a Design Thinking project.';
}

export async function POST(request) {
    try {
        const { message, phase, conversationHistory } = await request.json();

        // Validate input
        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        // Check for API key
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY not found in environment variables');
            return NextResponse.json(
                { error: 'AI service not configured. Please add GEMINI_API_KEY to .env.local' },
                { status: 500 }
            );
        }

        // Initialize Gemini
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        // Build the conversation context
        const phaseContext = getPhaseContext(phase);

        // Format conversation history for context (last 10 messages)
        let historyContext = '';
        if (conversationHistory && conversationHistory.length > 0) {
            const recentHistory = conversationHistory.slice(-10);
            historyContext = '\n\nRecent conversation:\n' + recentHistory.map(msg =>
                `${msg.sender}: ${msg.text}`
            ).join('\n');
        }

        // Build the full prompt
        const fullPrompt = `${SYSTEM_PROMPT}

Current context: ${phaseContext}
${historyContext}

User's message: ${message}

Respond as Socratic Bot:`;

        // Call Gemini API
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const reply = response.text();

        return NextResponse.json({ reply });

    } catch (error) {
        console.error('Chat API error:', error.message);
        console.error('Full error:', JSON.stringify(error, null, 2));

        // Handle specific Gemini errors
        if (error.message?.includes('API_KEY') || error.message?.includes('API key')) {
            return NextResponse.json(
                { error: 'Invalid API key. Please check your GEMINI_API_KEY in .env.local' },
                { status: 401 }
            );
        }

        if (error.message?.includes('not found') || error.message?.includes('model')) {
            return NextResponse.json(
                { error: 'Model not available. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: `Failed to generate response: ${error.message}` },
            { status: 500 }
        );
    }
}
