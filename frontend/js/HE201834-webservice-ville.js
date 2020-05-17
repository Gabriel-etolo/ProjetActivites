"use strict";

let activityChoosen = "";



// auteur Etolo Gabriel HE201834
function initPage() {
  initListener();

  let xhr = new XMLHttpRequest();
  xhr.open('get', 'code', true);
  xhr.onload = function() {
    remplireTable(JSON.parse(this.responseText), 'ville');
  };
  xhr.send();
}

function remplireTable(reponseRequete, idBodyTable) {
  let donnees = '';
  for (let e of reponseRequete) {
    donnees += '<tr>' + '<td onclick="getVille(\'' + e.code + '\');">' + e.nom + '</td>' + '</tr>' + '\n';
  }

  document.getElementById(idBodyTable).innerHTML = donnees;
}


//////////////////////////// Auteur Florent Biard HE201813/////////////////////////////


function getVille(code) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', 'getVilles?code=' + code, true);
  xhr.onload = function() {
    var ligne = JSON.parse(this.responseText);
    var lng = '';
    for (var i in ligne) {
      lng +='<tr>' +
      '<td onclick="getContact(\'' + ligne[i].Nom + '\');">' + ligne[i].Nom + '</td>' +
      '<td onclick="getContact(\'' + ligne[i].Nom + '\');">' + ligne[i].Type + '</td>' +
      '<td>' + '<button onclick="toggleForm(\'' + ligne[i].Nom + '\')">Ajouter un avis</button> ' +
      ' </td>' +
        '</tr>' + '\n';
    }
    document.getElementById('activite').innerHTML = lng;
  }

  xhr.send();
}



////////////////// auteur Dziemianko Sebastian HE201808 ///////////////////////


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

  if (formReview.style.display == 'block') {
    formReview.style.display = 'none';
  } else {
    formReview.style.display = 'block';
  }
}





/*

<link href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap" rel="stylesheet" />

*/
