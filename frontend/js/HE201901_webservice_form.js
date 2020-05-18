////////////////// auteur Julien Rahier HE201901 ///////////////////////

"use strict"

function initListener() {
  let formReview = document.getElementById("formReview");
  formReview.style.display = 'none';
  formReview.addEventListener("submit", addReview);
}

function addReview(event) {
    event.preventDefault();
    let formulaire = this;
    ajout(formulaire.title.value,formulaire.content.value);
}

function ajout(title, content){
	let xhr = new XMLHttpRequest();
  console.log(activityChoosen);
  console.log(title);
  console.log(content);

	xhr.open('get', "addReview?acti="+ activityChoosen +"&title=" + title + "&content=" + content, true);

  console.log(xhr);
	let newAdd = "<tr><td>" + title + "</td><td>" + content +"</td></tr>";

  document.getElementById("reviews").innerHTML = getReviews(activityChoosen);

	xhr.send();

}
