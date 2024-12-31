async function recuperationTravaux() { //opé asynchrones (tps), await gère promesses + facilement
    try { //tester code
        const reponseT = await fetch("http://localhost:5678/api/works");//requête API, attend promesse pr continuer
        if (!reponseT.ok) {//si réponse API réussie
            throw new Erreur("Erreur lors de la récupération des données");//sinon erreur ac message
        }
        const travaux = await reponseT.json(); // Convertion réponse en JSON, accès + facilement données
        console.log(travaux);
        for (let i = 0; i < travaux.length; i++) {
            obtenirProjet(travaux[i]);
        }
    } catch (erreur) { //si erreur, gère
        console.error("Il y a eu un problème :", erreur); // Gère les erreurs
    }
}
// Appel de la fonction
recuperationTravaux(); //exécution de la fonction

function obtenirProjet(info) {
    const projet = document.createElement("figure");
    projet.innerHTML = `<img src=${info.imageUrl} alt=${info.title}>
				<figcaption>${info.title}</figcaption>`;
    document.querySelector(".gallery").appendChild(projet);
}

async function obtenirCategories() {
    try {
        const reponseC = await fetch("http://localhost:5678/api/categories");
        if (!reponseC.ok) {
            throw new Erreur("Erreur lors de la récupération des données");
        }

        const categories = await reponseC.json();
        console.log(categories);
        for (let i = 0; i < categories.length; i++) {
            afficherFiltres(categories[i]);
        }
    } catch (erreur) {
        console.error("Il y a eu un problème :", erreur);
    }
}
obtenirCategories();


function afficherFiltres(info) {
    const divConteneur = document.createElement("div");
    divConteneur.innerHTML = `${info.name}`;
    document.querySelector(".div-conteneur").appendChild(divConteneur);
}