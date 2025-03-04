// Sélectionne tous les liens qui ont la classe "entity-link"
const entityLinks = document.querySelectorAll('.entity-link');
let coordonnes;
let apiMeteoURL = "https://www.infoclimat.fr/public-api/gfs/json?_ll="
let apiMeteoAuth = "&_auth=ARtUQwR6VHZXegYxBnAGLwJqDzpZL1B3BHgEZw5rUC0FblEwB2dWMF8xWicCLQE3Un8PbA02ADADaAF5CHpUNQFrVDgEb1QzVzgGYwYpBi0CLA9uWXlQdwRmBGsOa1" +
    "AtBWRRNgdlVipfNlo9AiwBNFJhD2cNLQAnA2EBYQhhVDYBYlQ5BGBUNlc" +
    "%2BBmMGKQYtAjcPaFk1UG8EZwRrDmVQYQVvUTMHZFY0XzVaPwIsATVSZw9vDTsAPgNpAW8IZVQoAX1USQQUVCtXeAYmBmMGdAIsDzpZOFA8&_c=4781c99121f14afc04f949f663cbe670"

entityLinks.forEach(link => {
    link.addEventListener('click', async () => {
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

        await getCoordinatedByAdress(localisation).then(r => {
            const modalLocalisation = document.getElementById('modalLocalisation');
            if (modalLocalisation) modalLocalisation.textContent = r;
            coordonnes = r;
        })

        await getMeteoByCoordinates(coordonnes).then(r => {
            const modalMeteo = document.getElementById('modalMeteo');
            if (modalMeteo) modalMeteo.textContent = meteo;
        })

    });
});

async function getCoordinatedByAdress(adress){
    let coordinates;

    await fetch("https://api-adresse.data.gouv.fr/search/?q=" + adress)
    .then(async res => {
        await res.json().then(data => {
            console.log(data)
            coordinates = data.features[0].geometry.coordinates[1] + ',' + data.features[0].geometry.coordinates[0]
        })
    })

    return coordinates;
}

async function getMeteoByCoordinates(coordinates){
    let meteo;

    await fetch(apiMeteoURL + coordinates + apiMeteoAuth)
        .then(async res => {
            await res.json().then(data => {
                console.log(data)
                meteo = data;
            })
        })
}