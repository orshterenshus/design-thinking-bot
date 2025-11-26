// ניהול מצב השלב הנוכחי (Phase)
const phases = {
    'empathize': { title: 'שלב 1: Empathize', desc: 'התמקד בהבנת המשתמשים, צרכיהם והכאבים שלהם. ' },
    'define': { title: 'שלב 2: Define', desc: 'גבש את תובנות המחקר לכדי הגדרת בעיה ברורה.' },
    'ideate': { title: 'שלב 3: Ideate', desc: 'זרוק כמה שיותר רעיונות לפתרון הבעיה ללא שיפוט.' },
    'prototype': { title: 'שלב 4: Prototype', desc: 'בנה גרסאות פשוטות ומהירות של הרעיונות שלך.' },
    'test': { title: 'שלב 5: Test', desc: 'בדוק את הפתרונות עם משתמשים אמיתיים.' }
};

function changePhase(phaseKey) {
    // עדכון כותרת ותיאור
    document.getElementById('current-phase-title').innerText = phases[phaseKey].title;
    document.getElementById('phase-desc').innerText = phases[phaseKey].desc;
    
    // עדכון ויזואלי של הסרגל (פשטני לדוגמה זו)
    const steps = document.querySelectorAll('.phase-step div');
    steps.forEach(div => {
        div.classList.remove('bg-blue-600', 'text-white');
        div.classList.add('bg-white', 'text-gray-500', 'border-2');
    });
    
    // הדגשת השלב הנבחר (בלוגיקה מלאה נצבע גם את הקודמים)
    // הערה: event הוא גלובלי בדפדפן כשמשתמשים ב-onclick מתוך ה-HTML
    if (event && event.currentTarget) {
        event.currentTarget.querySelector('div').classList.remove('bg-white', 'text-gray-500');
        event.currentTarget.querySelector('div').classList.add('bg-blue-600', 'text-white');
    }
    
    // הבוט מגיב לשינוי שלב (סימולציה)
    addBotMessage(`עברת ל${phases[phaseKey].title}. האם יש לך שאלות לגבי מטרות השלב הזה?`);
}

// ניהול העלאת קבצים (Upload & Watch)
function handleFiles(files) {
    const list = document.getElementById('file-list');
    Array.from(files).forEach(file => {
        const li = document.createElement('li');
        li.className = 'col-span-1 bg-white border rounded-lg shadow-sm p-4 flex items-center justify-between animate-pulse'; // אנימציה קטנה
        setTimeout(() => li.classList.remove('animate-pulse'), 500);

        li.innerHTML = `
            <div class="flex items-center">
                <div class="bg-green-100 p-2 rounded">
                    <span class="text-green-600 font-bold text-xs">${file.name.split('.').pop().toUpperCase()}</span>
                </div>
                <div class="mr-3 overflow-hidden">
                    <p class="text-sm font-medium text-gray-900 truncate" title="${file.name}">${file.name}</p>
                    <p class="text-xs text-gray-500">הועלה כעת</p>
                </div>
            </div>
            <button class="text-gray-400 hover:text-red-500" onclick="this.parentElement.remove()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        `;
        list.appendChild(li);
    });
    // איפוס ה-input כדי לאפשר העלאה חוזרת של אותו קובץ אם נמחק
    document.getElementById('file-upload').value = ''; 
}

// ניהול צ'אט (Chat for Proj)
function sendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    // הוספת הודעת משתמש
    const messages = document.getElementById('chat-messages');
    const userMsg = document.createElement('div');
    userMsg.className = 'flex items-start flex-row-reverse';
    userMsg.innerHTML = `
        <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">You</div>
        <div class="ml-3 bg-blue-600 text-white p-3 rounded-lg shadow-sm text-sm">
            ${text}
        </div>
    `;
    messages.appendChild(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // סימולציית תשובת בוט (Socratic Bot Logic)
    setTimeout(() => {
        addBotMessage("שאלה מצוינת. איך לדעתך הנתון הזה משפיע על הגדרת הבעיה שלך? נסה לחשוב על המניעים הסמויים של המשתמש."); 
    }, 1000);
}

function addBotMessage(text) {
    const messages = document.getElementById('chat-messages');
    const botMsg = document.createElement('div');
    botMsg.className = 'flex items-start';
    botMsg.innerHTML = `
        <div class="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">Bot</div>
        <div class="mr-3 bg-white p-3 rounded-lg shadow-sm text-sm text-gray-700 border border-gray-100">
            ${text}
        </div>
    `;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
}

// שיתוף (Share Proj)
function shareProject() {
    // שיתוף פעולה עם משתמשים אחרים
    alert("קישור לפרויקט הועתק ללוח! כעת ניתן לשלוח אותו לחברי הצוות.");
}