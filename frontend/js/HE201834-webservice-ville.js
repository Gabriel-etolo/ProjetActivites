"use strict";

let activityChoosen = "";



// auteur Etolo Gabriel HE201834


/*
function initPage() fonction servant à charger le webservice code
*/
function initPage() {
  initListener();

  let xhr = new XMLHttpRequest(); // Permet de parler avec le serveur , instancier XMLHttpRequest
  xhr.open('get', 'code', true); // vas chercher le webservice 'code' grace à la requête get
  xhr.onload = function() {
    remplireTable(JSON.parse(this.responseText), 'ville');
  };
  xhr.send();
}



/*
function remplireTable crée un tableau entre les balises
reponseRequete reponse en json du web service code
idBodyTable l'id dans lequel les données seront intégrées
*/
function remplireTable(reponseRequete, idBodyTable) {
  let donnees = '<button type="button" class="list-group-item list-group-item-action active disabled">Villes</button>'; // variable vide qui contiendra les données sql
  for (let e of reponseRequete) { // charge les donnees de la table sql une par un en y integrant une fonction onclick faisant appel à la fonction getVille
    donnees += '<button type="button" class="list-group-item list-group-item-action" onclick="getVille(\'' + e.code + '\');">'+ e.nom  +'</button>' + '\n'
  }

  document.getElementById("ville").innerHTML = donnees; // charge la table dans le tboby d'id ville
}


//////////////////////////// Auteur Florent Biard HE201813/////////////////////////////


function getVille(code) { // création de ma fonction, variable de code au-dessus
  let xhr = new XMLHttpRequest(); // instancier pour un serveur
  xhr.open('get', 'getVilles?code=' + code, true); // ouvre la requetes vers le serveur, url, ouvre un asynchro
  xhr.onload = function() {  // création d'une fonction lorsque la requetes est effectuer
    var ligne = JSON.parse(this.responseText); //crée une chaine
    var lng = '<button type="button" class="list-group-item list-group-item-action active disabled">Activités</button>'; //création d'une variable
    for (var i in ligne) { // création d'une boucle qui va créer une chaine de caractère avec les données d'SQL dans une liste de boutons avec la variable vide.(on placera un onclick pour la fonction getReviews

      lng += '<button class="list-group-item list-group-item-action flex-column align-items-start" onclick="getContact(\'' + ligne[i].Nom + '\'); toggleForm(\'' + ligne[i].Nom + '\');">' +
                '<div class="d-flex w-100 justify-content-between">' +
                  '<h5 class="mb-1">' + ligne[i].Nom + '</h5>' +
                  '<small> ' + ligne[i].Type + '</small>' +
                '</div>' +
                '<small>Cliquer sur l\'activité pour voir ses informations et rajouter un avis.</small>' +
            '</button>' + '\n';
    }
    document.getElementById('activite').innerHTML = lng; // il place ma variable dans l'id correspondant
  }

  xhr.send(); // envoie la requetes
}



////////////////// auteur Dziemianko Sebastian HE201808 ///////////////////////

/**
* Déclare la fonction getContact
* Référencie la fonction getReviews
* @param {string} définis la variable xhr
* @param {string.open} Ouvre la requette vers le serveur
* @param {string.onload} définis le démarage de la fonction sur chargement du site
* @param {xhr.responseText} définis la réponse de la fonction
*
* @param {xhr.send} Envoie la réponse de la fonction
*/

function getContact(Nom) {
  getReviews(Nom);
  let xhr = new XMLHttpRequest();
  xhr.open('get', 'Contact?acti=' + Nom, true);
  xhr.onload = function() {
    var reponse = xhr.responseText;
    document.getElementById('contact').innerHTML = reponse + '\n';
  }
  xhr.send();

}


////////////////// auteur Julien Rahier HE201901 ///////////////////////

function getReviews(Nom) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', 'review?acti=' + Nom, true);
  xhr.onload = function() {
    var ligne = JSON.parse(this.responseText);
    var lng = '';
    for (var i in ligne) {
      lng +=
      '<tr>' +
        '<td>' + ligne[i].actiReviewTitle + '</td>' +
        '<td>' + ligne[i].actiReviewContent + '</td>' +
      '</tr>' + '\n';
    }
    document.getElementById('reviews').innerHTML = lng;
  }

  xhr.send();

}


function toggleForm(Nom) {
  activityChoosen = Nom;


  document.getElementById('nomActivityChoosen').innerHTML = "Ajouter un avis pour : " + activityChoosen;

  if (formReview.style.display == 'none') {
    formReview.style.display = 'block';
  }
}
