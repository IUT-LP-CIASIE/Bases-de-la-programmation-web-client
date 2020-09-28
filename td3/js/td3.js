//(function() {
(() => {


	let application = {};
  
	// Définitions des fonctions du TD

	// EXERCICE 1
	// fonction qui affiche "click"
//	function logClick() {
	application.logClick = function() {
		console.log("click");
	}

	// EXERCICE 2
	// Fonction qui change la couleur d'un bouton
	application.updateButtonClass = function(event) {
		
		event.target.classList.toggle('btn-orange');
	}

	// EXERCICE 3
	// Inserer un item en fin de liste

	application.insererDansListe = function() {

		let list = document.querySelector("#ex3");
		let li = document.createElement("li");

		let quantite = document.querySelectorAll('ul li').length;

	//	let t = document.createTextNode("click bouton : " + quantite);
	//	li.appendChild(t);

		li.innerHTML = "click bouton : " + quantite;

		list.appendChild(li);


	//	lierElementsAuClic();

	}

	// EXERCICE 4
	// vider la liste
	application.clearList = function() {
		document.querySelector("#ex3").innerHTML = '';

	/*	let elements = document.querySelectorAll("#ex3 li");
		elements.forEach(element => {
			element.parentNode.removeChild(element);
		})*/

	}


	// EXERCICE 5
	application.incrInputValue = function() {
		//document.querySelector("#ex5i").stepUp(1);
		document.querySelector("#ex5i").value++;
	}


	// EXERCICE 6
	/*application.lierElementsAuClic = function() {

		let elements = document.querySelectorAll("#ex3 li");


		elements.forEach(element => {
			console.log('retirerElementDeListe associé au clic sur ',element);
			element.addEventListener("click",retirerElementDeListe);
		});	

	}*/

	application.retirerElementDeListe = function(event) {
		let element = event.target;
		element.parentNode.removeChild(element);
	}

	application.inverser = function() {
		let elements = document.querySelectorAll('#ex3 li');
		
		let elementsReversed=[];

		elementsReversed = Array.from(elements).reverse();

		// boucler sur les elements
		elementsReversed.forEach(element => {
			element.parentNode.appendChild(element);
		})
	}


	application.load = function() {


		// EXERCICE 1
		// quand on clic sur le bouton vert, 
		// on affiche "clic" dans la console
		let btn1 = document.querySelector("#ex1");
		btn1.addEventListener("click",application.logClick);

		// EXERCICE 2
		// quand on clic sur le bouton vert
		// il devient orange
		btn1.addEventListener("click", application.updateButtonClass);

		// EXERCICE 3
		// quand on clic sur le bouton vert
		// on ajoute un element dans la liste
		//	...

		btn1.addEventListener("click", application.insererDansListe);


		// EXERCICE 4
		// quand on clic sur le bouton rouge
		// on vide la liste
		let btn2 = document.querySelector("#ex4");
		btn2.addEventListener("click",application.clearList);

		// EXERCICE 5
		// incrementer quand on clic sur le bouton rouge
		let btn3 = document.querySelector("#ex5b");
		btn3.addEventListener("click",application.incrInputValue);


		// EXERCICE 6
	//	lierElementsAuClic();
		let liste = document.querySelector("#ex3");
		liste.addEventListener("click",application.retirerElementDeListe);

		// EXERCICE 7
		// incrementer quand on clic sur le bouton rouge
		let btn4 = document.querySelector("#ex7");
		btn4.addEventListener("click",application.inverser);



	}

	

	// Execution du code quand le DOM est chargé et ready
	//window.addEventListener("DOMContentLoaded", application.load);
	application.load();

})();
