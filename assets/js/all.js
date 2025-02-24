const loginBtn = document.querySelector('#loginBtn');
const userDropdownContainer = document.querySelector('#userDropdownContainer');
const disconnectBtn = document.querySelector('#disconnectBtn');

const alertLoginSuccessHTML = `
    <div class="col-sm-6 col-md-6">
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Connexion réussi!</strong> Vous êtes désormais connecté pendant 1 heures.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
`;

console.log(localStorage.getItem("email"));

if(localStorage.getItem('isLoggedIn') === "yes") {
    userDropdownContainer.classList.remove('d-none');
    loginBtn.classList.add('d-none');
    if(!localStorage.getItem("alreadyLoggedIn")) {
        showAlertLoginSuccess();
        localStorage.setItem("alreadyLoggedIn", "yes");
    }
}else{
    loginBtn.classList.remove('d-none');
    userDropdownContainer.classList.add('d-none');
}

disconnectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("alreadyLoggedIn");
    location.href="/GestionClientProspect/index.html"
})

function showAlertLoginSuccess() {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = alertLoginSuccessHTML;
}