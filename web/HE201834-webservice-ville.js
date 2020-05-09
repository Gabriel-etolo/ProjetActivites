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
	let donnees;
	for(let e of reponseRequete){
	donnees += '<tr>'+ '<td onclick="getVille(\''+e.code+'\');">'+ e.nom+ '</td>'+'</tr>'+'\n';
	}
	
	document.getElementById(idBodyTable).innerHTML= donnees;
	}
	
	
//////////////////////////// Auteur Florent Biard HE201813/////////////////////////////


function getVille(initPage) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'getVilles?code=1000', true);
	xhr.onload = function(){
		var ligne = JSON.parse(this.responseText); var lng;
		for( var i in ligne){
			lng +='<li>' + ligne[i].Nom + '</li>';
		}
		document.getElementById('activite').innerHTML = lng;
	}

	xhr.send();
}
		



