'use client';

import { useState, useEffect, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';

function ProjectContent() {
    const params = useParams();
    const router = useRouter();
    const projectId = params.id;

    const [project, setProject] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPhase, setCurrentPhase] = useState('Empathize');
    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Check authentication
        const userStr = localStorage.getItem('currentUser');
        if (!userStr) {
            router.push('/login');
            return;
        }
        const user = JSON.parse(userStr);
        setCurrentUser(user);

        // Fetch project details - pass user directly to avoid race condition
        fetchProject(user);
    }, [projectId]);

    const fetchProject = async (user) => {
        // Use provided user or fallback to currentUser state
        const username = user?.username || currentUser?.username;
        if (!username) {
            setError('User not found');
            setLoading(false);
            return;
        }
        try {
            const res = await fetch(`/api/projects/${projectId}?user=${encodeURIComponent(username)}`);
            if (res.ok) {
                const projectData = await res.json();
                setProject(projectData);
                setCurrentPhase(projectData.phase);

                const loadedMessages = projectData.messages || [];
                // If no messages, show intro
                if (loadedMessages.length === 0) {
                    setMessages([
                        { sender: 'Bot', text: `Hello! I am the Socratic Bot accompanying the project. Currently, we are in the <strong>${projectData.phase}</strong> phase. <br><br>How can you enter your user's inner circle?` }
                    ]);
                } else {
                    setMessages(loadedMessages);
                }
            } else if (res.status === 404) {
                setError('Project not found');
            } else if (res.status === 403) {
                setError('You do not have access to this project');
            } else {
                setError('Failed to load project');
            }
        } catch (error) {
            console.error('Failed to fetch project', error);
            setError('Failed to load project');
        } finally {
            setLoading(false);
        }
    };

    const changePhase = async (phase) => {
        const formattedPhase = phase.charAt(0).toUpperCase() + phase.slice(1);
        setCurrentPhase(formattedPhase);

        // Update phase in database
        try {
            const res = await fetch(`/api/projects/${projectId}?user=${encodeURIComponent(currentUser.username)}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phase: formattedPhase }),
            });
            if (!res.ok) {
                console.error('Failed to update phase');
            }
        } catch (error) {
            console.error('Error updating phase', error);
        }

        setMessages(prev => [...prev, {
            sender: 'Bot',
            text: `Switched to <strong>${formattedPhase}</strong> phase. What are your goals for this step?`
        }]);
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        const newMessage = { sender: 'You', text: chatInput, timestamp: new Date() };
        setMessages(prev => [...prev, newMessage]);
        setChatInput('');

        // Persist user message
        try {
            await fetch(`/api/projects/${projectId}?user=${encodeURIComponent(currentUser.username)}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: newMessage })
            });
        } catch (error) {
            console.error('Failed to save message', error);
        }

        const userText = newMessage.text;

        setTimeout(async () => {
            let botReplyText = "That's an interesting perspective. Tell me more.";
            if (userText.toLowerCase().includes('hello')) botReplyText = "Hi there! Ready to design?";

            const botMessage = { sender: 'Bot', text: botReplyText, timestamp: new Date() };
            setMessages(prev => [...prev, botMessage]);

            // Persist bot message
            try {
                await fetch(`/api/projects/${projectId}?user=${encodeURIComponent(currentUser.username)}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: botMessage })
                });
            } catch (error) {
                console.error('Failed to save bot message', error);
            }
        }, 1000);
    };

    const handleFileUpload = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files).map(file => ({
                name: file.name,
                size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
                date: 'Just now'
            }));
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const getStepClass = (stepPhase) => {
        const steps = ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'];
        const currentIndex = steps.indexOf(currentPhase);
        const stepIndex = steps.indexOf(stepPhase);

        if (stepIndex === currentIndex) {
            return "bg-blue-600 text-white";
        } else if (stepIndex < currentIndex) {
            return "bg-green-500 text-white";
        } else {
            return "bg-white border-2 border-gray-300 text-gray-500";
        }
    };

    if (loading) return <div className="p-10 text-center">Loading project...</div>;
    if (error) return <div className="p-10 text-center text-red-600">{error}</div>;
    if (!project) return <div className="p-10 text-center">Project not found</div>;

    return (
        <div className="bg-gray-50 text-gray-800 font-sans h-screen flex flex-col overflow-hidden">
            {/* Nav */}
            <nav className="bg-white shadow-sm border-b border-gray-200 z-10 shrink-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center font-bold text-blue-600 text-xl cursor-pointer" onClick={() => router.push('/project-management')}>
                                DesignBot
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Workspace
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Project Progress: {project.name}</h2>
                        <div className="flex items-center justify-between w-full relative">
                            <div className="absolute w-full top-1/2 transform -translate-y-1/2 bg-gray-200 h-1 z-0"></div>

                            {['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'].map((phase, idx) => (
                                <div key={phase} className="relative z-10 text-center cursor-pointer" onClick={() => changePhase(phase)}>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto font-bold shadow-lg transition-all ${getStepClass(phase)}`}>
                                        {idx + 1}
                                    </div>
                                    <span className="text-sm font-medium mt-2 block text-gray-600">{phase}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-4">
                                <h3 className="text-xl font-bold text-gray-800">Phase: {currentPhase}</h3>
                                {project && currentUser && (
                                    <span className={`text-xs px-2 py-1 rounded-full font-bold border ${project.createdBy === currentUser.username ? 'bg-purple-100 text-purple-700 border-purple-200' : 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                                        {project.createdBy === currentUser.username ? 'Owner' : (project.sharedWith?.find(s => s.user === currentUser.username)?.permission || 'Viewer')}
                                    </span>
                                )}
                            </div>

                            {(project.createdBy === currentUser.username || project.sharedWith?.find(s => s.user === currentUser.username)?.permission === 'Owner') && (
                                <button
                                    onClick={() => {
                                        console.log('Share button clicked');
                                        const userToShare = prompt("Enter username to share with:");
                                        if (userToShare) {
                                            console.log('User entered:', userToShare);
                                            fetch(`/api/projects/${projectId}?user=${encodeURIComponent(currentUser.username)}`, {
                                                method: 'PATCH',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    shareWithUser: { user: userToShare, permission: 'Basic' }
                                                })
                                            }).then(res => {
                                                console.log('Fetch response:', res.status);
                                                if (res.ok) alert('Project shared successfully!');
                                                else res.json().then(d => {
                                                    console.error('Share failed:', d);
                                                    alert(d.error || 'Failed to share');
                                                });
                                            }).catch(err => console.error('Share fetch error:', err));
                                        } else {
                                            console.log('Share prompt cancelled');
                                        }
                                    }}
                                    className="flex items-center gap-2 text-sm bg-indigo-50 text-indigo-700 px-3 py-2 rounded-md hover:bg-indigo-100 transition-colors">
                                    Share Project
                                </button>
                            )}
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors"
                            onClick={() => document.getElementById('file-upload')?.click()}
                        >
                            <p className="mt-1 text-sm text-gray-600">
                                <span className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none cursor-pointer">Upload a file</span>
                                or drag and drop
                            </p>
                            <input id="file-upload" type="file" className="hidden" multiple onChange={handleFileUpload} />
                        </div>

                        {files.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Uploaded Files:</h4>
                                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {files.map((f, i) => (
                                        <li key={i} className="col-span-1 bg-white border rounded-lg shadow-sm p-4 flex items-center">
                                            <div className="bg-blue-100 p-2 rounded text-blue-600 font-bold text-xs">FILE</div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">{f.name}</p>
                                                <p className="text-xs text-gray-500">{f.size}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </main>

                <aside className="w-96 bg-white border-l border-gray-200 flex flex-col shadow-xl z-20">
                    <div className="p-4 border-b border-gray-200 bg-blue-600 text-white">
                        <h2 className="text-lg font-semibold">Socratic Bot</h2>
                        <p className="text-xs text-blue-100">Design Thinking Mentor</p>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, i) => (
                            <div key={i} className="flex items-start">
                                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${msg.sender === 'Bot' ? 'bg-blue-600' : 'bg-green-500'}`}>
                                    {msg.sender === 'Bot' ? 'Bot' : 'You'}
                                </div>
                                <div className="ml-3 bg-white p-3 rounded-lg shadow-sm text-sm text-gray-700 border border-gray-100"
                                    dangerouslySetInnerHTML={{ __html: msg.text }}>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-gray-200 bg-white">
                        <form onSubmit={sendMessage} className="flex gap-2">
                            <input
                                type="text"
                                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type a message..."
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                            />
                            <button type="submit" className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition">
                                Send
                            </button>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default function ProjectPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectContent />
        </Suspense>
    );
}