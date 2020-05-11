"use strict";

// auteur Etolo Gabriel HE201834
function initPage() {
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'code', true);
        xhr.onload = function() {
		remplireTable(JSON.parse(this.responseText), 'ville');
	};
	xhr.send();
}

function remplireTable(reponseRequete, idBodyTable){
	let donnees= "";
	for(let e of reponseRequete){
	donnees += '<tr>'+ '<td onclick="getVille(\''+e.code+'\');">'+ e.nom+ '</td>'+'</tr>'+'\n';
	}
	
	document.getElementById(idBodyTable).innerHTML= donnees;
	}
//////////////////////////// Auteur Florent Biard HE201813/////////////////////////////


function getVille(code) {
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'getVilles?code=' + code, true);
	xhr.onload = function(){
		var ligne = JSON.parse(this.responseText); var lng = '';
		for( var i in ligne){
			lng +='<tr>' + '<td onclick="getContact(\'' + ligne[i].Nom + '\');">' + ligne[i].Nom + '</td>' + '<td onclick="getContact(\'' + ligne[i].Nom + '\');">' + ligne[i].Type + '</td>' + '</tr>' + '\n';
		}
		document.getElementById('activite').innerHTML = lng;
	}

	xhr.send();
}
	
	////////////////// auteur Dziemianko Sebastian HE201808 ///////////////////////


function getContact(Nom) {
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'Contact?acti=' + Nom, true);
	xhr.onload = function() {
	document.getElementById('contact').innerHTML = xhr.responseText + '\n';
			
	}
	
	xhr.send();

}



	
	

