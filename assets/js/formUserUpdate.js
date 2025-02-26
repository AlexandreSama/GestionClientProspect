document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');


    const nom= params.get('nom');
    const prenom= params.get('prenom');
    const email= params.get('email');

    setValueIfExists('nom', nom);
    setValueIfExists('prenom', prenom);
    setValueIfExists('email', email);

});

/**
 * setValueIfExists(id, value)
 * Trouve l'élément #id, et s'il existe, lui affecte value
 */
function setValueIfExists(fieldId, value) {
    const field = document.getElementById(fieldId);
    if (field && value !== null) {
        field.value = value;
    }
}
