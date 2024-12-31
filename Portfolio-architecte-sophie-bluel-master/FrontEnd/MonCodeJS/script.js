async function recuperationTravaux() { //opé asynchrones (tps), await gère promesses + facilement
    try { //tester code
        const response = await fetch("http://localhost:5678/api/works");//requête API, attend promesse pr continuer
        if (!response.ok) {//si réponse API réussie
            throw new Error("Erreur lors de la récupération des données");//sinon erreur ac message
        }
        const travaux = await response.json(); // Convertion réponse en JSON, accès + facilement données
        console.log(travaux);
        for (let i = 0; i < travaux.length; i++) {
            AfficherProjet(travaux[i]);
        }
    } catch (error) { //si erreur, gère
        console.error("Il y a eu un problème :", error); // Gère les erreurs
    }
}

// Appel de la fonction
recuperationTravaux(); //exécution de la fonction

function AfficherProjet(info) {
    const projet = document.createElement("figure");
    projet.innerHTML = `<img src=${info.imageUrl} alt=${info.title}>
				<figcaption>${info.title}</figcaption>`
    document.querySelector(".gallery").appendChild(projet);
}