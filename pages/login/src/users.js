const file="db.json"

let users = []

function initUsers() {
    let rawFile = new XMLHttpRequest(); //יצירת אובייקט בקשה חדש
    rawFile.open("GET", file , false); //פתיחת בקשה לפתיחת הקובץ
    rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)  {
		// (בדיקה אם הסטטוס תקין (200 - הצלחה, 0 - לעיתים בקובץ מקומי
        if(rawFile.status === 200 || rawFile.status == 0) {
            let allText = rawFile.responseText; // קריאת הטקסט מהתגובה
            let data = JSON.parse(allText) // המרת הטקסט לאובייקט
            users = data.users // שמירת מערך המשתמשים במשתנה גלובלי
       }
    }
  }
  rawFile.send(null); // שליחת הבקשה
}

function find(nameOrMail){
    if(users.length==0) //אם המערך ריק
        initUsers() //נאתחל את המערך
    //נחזיר מהמערך משתמש עם שם משתמש או מייל הזהה לפרמטר
    return users.find(u=>u.username===nameOrMail || u.email===nameOrMail);
}

function updateData(){
    //המרת מערך המשתמשים למחרוזת עם מבנה הרצוי שהוגדר בשלב 1
    let data ='{ "users": '+JSON.stringify(users) + '}'
    
    //יצירת אובייקט בינארי של הנתונים
    const blob = new Blob([data], { type: 'application/json' });
    //יצירת כתובת רשת זמנית לאובייקט
    const url = URL.createObjectURL(blob);
    //יצירת אלמנט קישור להורדת הקובץ
    const a = document.createElement('a');
    a.download = file; //הגדרת שם הקובץ שיישמר
    a.href = url; //הצמדת כתובת הרשת של האובייקט לאלמנט
    a.click(); // סימולציה של לחיצה כדי להתחיל בהורדה
    URL.revokeObjectURL(url); // ניקוי המשאב מהזיכרון
}

function add(username,email,password,dob,isAdmin){
    //init users
    initUsers()
    //create new user and add to array
    let user = {"username":username, "email":email,"password":password,"dob":dob,"isAdmin":isAdmin}
    users.push(user)
    //update json file
    updateData()
}



