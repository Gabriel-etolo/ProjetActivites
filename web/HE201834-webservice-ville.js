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


function getVille(code) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'getVilles?code=' + code, true);
	xhr.onload = function(){
		var ligne = JSON.parse(this.responseText); var lng;
		for( var i in ligne){
			lng +='<li>' + ligne[i].Nom + '</li>';
		}
		document.getElementById('activite').innerHTML = lng;
	}

	xhr.send();
}
		
		
		
////////////////// auteur Dziemianko sebastian HE201808 ///////////////////////


function GetContact(Nom)
	var xhr = new XMLHttpRequest()
	xhr.open('get', 'getContact?acti=' + Nom, true);
	xhr.onload = function() {
		var contactActi = JSON.parse(this.responseText); var num;
		for( var a in contactActi){
			num +='<li>' + contactActi[a].activiteTelephone + '</li>' + '<li>' + contactActi[a].activiteEmail + '</li>';
		}
		document.getElementById().innerHTML = num;
	}
	xhr.send();
}




