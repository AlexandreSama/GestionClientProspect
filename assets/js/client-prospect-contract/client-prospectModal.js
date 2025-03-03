// Sélectionne tous les liens qui ont la classe "entity-link"
const entityLinks = document.querySelectorAll('.entity-link');

entityLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Récupère les data-* du lien cliqué
        const raison = link.getAttribute('data-raison') || '';
        const email = link.getAttribute('data-email') || '';
        const phone = link.getAttribute('data-phone') || '';

        // Champs spécifiques "client"
        const chiffreAffaire = link.getAttribute('data-chiffreaffaire') || '';
        const nbrEmploye = link.getAttribute('data-nbremploye') || '';

        // Champs spécifiques "prospect"
        const prospection = link.getAttribute('data-prospection') || '';
        const interest = link.getAttribute('data-interest') || '';

        // Champs communs
        const localisation = link.getAttribute('data-localisation') || '';
        const meteo = link.getAttribute('data-meteo') || '';

        // Injecte les infos dans la modale
        // ATTENTION : selon la page, tous les spans n'existent pas forcément.
        // On vérifie que l'élément existe avant de le remplir.
        const modalRaisonSociale = document.getElementById('modalRaisonSociale');
        if (modalRaisonSociale) modalRaisonSociale.textContent = raison;

        const modalEmail = document.getElementById('modalEmail');
        if (modalEmail) modalEmail.textContent = email;

        const modalTelephone = document.getElementById('modalTelephone');
        if (modalTelephone) modalTelephone.textContent = phone;

        const modalChiffreAffaire = document.getElementById('modalChiffreAffaire');
        if (modalChiffreAffaire) modalChiffreAffaire.textContent = chiffreAffaire;

        const modalNbrEmploye = document.getElementById('modalNbrEmploye');
        if (modalNbrEmploye) modalNbrEmploye.textContent = nbrEmploye;

        const modalDateProspection = document.getElementById('modalDateProspection');
        if (modalDateProspection) modalDateProspection.textContent = prospection;

        const modalInteress = document.getElementById('modalInteress');
        if (modalInteress) modalInteress.textContent = interest;

        const modalLocalisation = document.getElementById('modalLocalisation');
        if (modalLocalisation) modalLocalisation.textContent = localisation;

        const modalMeteo = document.getElementById('modalMeteo');
        if (modalMeteo) modalMeteo.textContent = meteo;
    });
});
