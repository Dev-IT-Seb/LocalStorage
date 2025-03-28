//-----------------------------------------------------------------------------------------------------------//
                                            // LOCALSTORAGE //
//-----------------------------------------------------------------------------------------------------------//
// Description Localstorage
//  Permet de sauvegarder maximum 5mo dans le cache du navigateur
// Si le cache est vidé comme vider l'historique du navigateur; les données seront supprimées
//-----------------------------------------------------------------------------------------------------------//
//
// Fonction pour afficher les données enregistrées
function afficherDonneesEnregistrees() {

    // LOCALSTORAGE - SELECTION DES INPUTS HTML POUR LA SAUVEGARDE DES DATAS
    let savedName = localStorage.getItem("name");
    let savedEmail = localStorage.getItem("email");

    // Condition pour vérifier si une valeur existe dans les INPUTS HTML du formulaire (EN DEHORS DU LOCALSTORAGE)
    if (savedName && savedEmail) {
        document.getElementById("saved-data").textContent = `Nom : ${savedName} | Email : ${savedEmail}`;
    }
}
//------------------------------------------------------------------------------------------------------------//
// Attendre le chargement du DOM (DOMContentLoaded)
//
document.addEventListener("DOMContentLoaded", function () {
    
    //Affichage de la function précedente
    afficherDonneesEnregistrees();

    // Gérer la soumission du formulaire
    document.getElementById("user-form").addEventListener("submit", function (event) {
        
        // Empêche le rechargement de la page
        event.preventDefault();

        // SELECTEURS ID DES INPUTS HTML + RECUPERATION DES VALEURS SAISIES + SUPPRESSION DES ESPACES AVEC TRIM
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();

        if (name && email) {
            // ENREGISTREMENT DES DATAS (VALEUR) DANS LE CACHE = MAXI 5 Mo
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);

            // Mettre à jour l'affichage
            afficherDonneesEnregistrees();
        } else {
            alert("Veuillez remplir tous les champs !");
        }
    });
});
//------------------------------------------------------------------------------------------------------------//