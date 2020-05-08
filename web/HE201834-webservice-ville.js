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
	
	
	



