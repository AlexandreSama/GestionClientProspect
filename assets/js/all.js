const loginBtn = document.querySelector('#loginBtn');
const disconnectBtn = document.querySelector('#disconnectBtn');
const userDropdownContainer = document.querySelector('#userDropdownContainer');
const gereClientBtn = document.querySelector('#listeClientBtn');
const gererProspectBtn = document.querySelector('#listeProspectBtn');

if(localStorage.getItem('isLoggedIn') === "yes") {
    userDropdownContainer.classList.remove('d-none');
    loginBtn.classList.add('d-none');
    gereClientBtn.href = '/GestionClientProspect/assets/pages/listeClient.html';
    gererProspectBtn.href = '/GestionClientProspect/assets/pages/listeProspect.html';
    if(!localStorage.getItem("alreadyLoggedIn")) {
        localStorage.setItem("alreadyLoggedIn", "yes");
    }
}else{
    loginBtn.classList.remove('d-none');
    userDropdownContainer.classList.add('d-none');
    gereClientBtn.href = '/GestionClientProspect/assets/pages/login.html';
    gererProspectBtn.href = '/GestionClientProspect/assets/pages/login.html';
}

disconnectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("alreadyLoggedIn");
    location.href="/GestionClientProspect/index.html"
})