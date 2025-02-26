document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');

    if (action === 'edit') {
        const id= params.get('id');
        const raison= params.get('raison');
        const email= params.get('email');
        const phone= params.get('phone');
        const numero= params.get('numero');
        const rue= params.get('rue');
        const cp= params.get('cp');
        const ville = params.get('ville');
        const ca= params.get('ca');
        const employe= params.get('employe');
        const dateProspect= params.get('dateProspection');
        const estInteressé= params.get('estInteressé');

        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            pageTitle.textContent = 'Modifier un enregistrement';
        }

        setValueIfExists('clientId', id);
        setValueIfExists('prospectId', id);

        setValueIfExists('raisonSociale', raison);
        setValueIfExists('email', email);
        setValueIfExists('phone', phone);
        setValueIfExists('numeroRue', numero);
        setValueIfExists('nomRue', rue);
        setValueIfExists('codePostal', cp);
        setValueIfExists('ville', ville);
        setValueIfExists('chiffreAffaire', ca);
        setValueIfExists('nbEmploye', employe);

        setValueIfExists('dateProspection', dateProspect);
        setValueIfExists('estInteressé', estInteressé);
    } else {
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            pageTitle.textContent = 'Ajouter un enregistrement';
        }
    }
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
