
registerForm.addEventListener('submit', async(event)=> {
    const html = document.documentElement;
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');
    event.preventDefault();
    const username = document.getElementById('userInput').value;
    const email = document.getElementById('mailInput').value;
    const password = document.getElementById('passInput').value;
    const confirmPassword = document.getElementById('confirmInput').value;
    const dob = document.getElementById('dateInput').value;

    registerMessage.textContent = "";
    if (password !== confirmPassword) {
        registerMessage.textContent = "Passwords do not match.";
        registerMessage.classList.remove("text-green-500");
        registerMessage.classList.add("text-red-500");
        return;
    }
    try {
        if(find(username)){
            registerMessage.textContent = "Username or email already exists.";
            registerMessage.classList.remove("text-green-500");
            registerMessage.classList.add("text-red-500");
            return;
        }

        if(users.length === 0){
            isAdmin = true;
        }else{
            isAdmin = false;
        }

        add(username, email, password, dob, isAdmin);


        registerMessage.textContent = "Registration successful! (Data stored in local storage)";
        registerMessage.classList.remove("text-red-500");
        registerMessage.classList.add("text-green-500");
    }catch(error){
        registerMessage.textContent = "An error occurred during registration.";
        registerMessage.classList.remove("text-green-500");
        registerMessage.classList.add("text-red-500");
    }


})
