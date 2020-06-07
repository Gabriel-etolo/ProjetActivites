////////////////// auteur Julien Rahier HE201901 ///////////////////////

"use strict"

function initListener() { // Initialise le formulaire et ajoute un listener dessus
  let formReview = document.getElementById("formReview");
  formReview.style.display = 'none';
  formReview.addEventListener("submit", addReview);
}

/**
 * fonction addReview
 *
 * @param {object} event - An event param
 *
 * @example
 *
 *     foo('hello')
 */
function addReview(event) {
    event.preventDefault(); // Permet de ne pas recharger la page
    let formulaire = this;
    ajout(formulaire.title.value,formulaire.content.value); // appelle la fonction ajout avec le titre et le contenu d'un avis
    formulaire.reset(); // Vide le formulaire des infos
}


/**
 * fonction ajout
 *
 * @param {string} title - Titre de l'avis
 * @param {string} content - Contenu de l'avis
 * @return {void}
 *
 * @example
 *
 *     ajout('titre', 'contenu')
 */
function ajout(title, content){
	let xhr = new XMLHttpRequest(); // Initialise une requête xhr

	xhr.open('get', "addReview?acti="+ activityChoosen +"&title=" + title + "&content=" + content, true); // Appelle

	let newAdd = "<tr><td>" + title + "</td><td>" + content +"</td></tr>";

  document.getElementById("reviews").innerHTML = getReviews(activityChoosen); //Mets à jour les avis

	xhr.send();

}
