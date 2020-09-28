'use strict'

// exercice 1 Q.1

function minimum(a, b) {
	if(a < b) {
		return a;
	} else {
		return b;
	}
} 

//console.log(minimum(5,12));

function maximum(a, b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
} 

//console.log(maximum(5,12));

// exercice 1 Q.2
function bingo() {
	let rang=1;
	while(rang <= 100) {
		console.log(rang);

		// est il divisble par 3 ?
		if(rang%3 == 0) {
			console.log('woueee');
		}
		// est il divisble par 5 ?
		if(rang%5 == 0) {
			console.log('yoooo');
		}

		if(rang == 73) {
			console.log('Biinnngooo');
		}
		rang++;
	}
}

//bingo();

// exercice 1 Q.3

function power(n, x) {
	// definition du résultat.
	// cas aux limites : X^0 donne 1
	let resultat = 1;

	// boucle sur la puissance
	for(let compteur=0; compteur < n; compteur++) {
		resultat = resultat * x;
	}

	// on retourne le résultat
	return resultat;
}


// 4 puissance 2  = 16
//console.log(power(2,4));

// 4 puissance 3  = 64
//console.log(power(3,4));


// 52 puissance 8  = 53459728531456
//console.log(power(8,52));


// exercice 2 Q.1

function creerMultiplicateur(multiple) {
	return function(valeur) {
		return valeur * multiple;
	}
}

let multiplcateur_32 = creerMultiplicateur(32);
let multiplcateur_10 = creerMultiplicateur(10);
let multiplcateur_5 = creerMultiplicateur(5);
/*
console.log(multiplcateur_10(2))
console.log(multiplcateur_5(2))
console.log(multiplcateur_32(2))*/


/* 
	Créer une fonction creerAdditionneur qui prend en 
	parametre n et retourne une fonction qui ajoute x à n 
*/

function creerAdditionneur(addition){
	return function(valeur){
		return valeur + addition;
	}
}

let additionneur_32 = creerAdditionneur(32);
let additionneur_10 = creerAdditionneur(10);

//console.log(additionneur_32(58));
//console.log(additionneur_10(12));

// exercice 2 Q.2

function creerSequence(init, step) {
	return function() {
		init += step;
		return init;
	}
}

let sequence = creerSequence(0, 5);

/*console.log(sequence()); //  5
console.log(sequence()); //  10
console.log(sequence()); //  15
*/

let sequence2 = creerSequence(100, -5);

/*console.log(sequence2()); //  95
console.log(sequence2()); //  90
console.log(sequence2()); //  85
*/

// exercice 2 Q.3

function creerLaSuiteDeFibonacci(premier, deuxieme) {

	return function() {

		let resultat = premier + deuxieme;
		premier = deuxieme;
		deuxieme = resultat;
		return resultat;
	}
}

let suite = creerLaSuiteDeFibonacci(0,1);
/*console.log(suite()) // passage numero 1 : 1
console.log(suite()) // passage numero 2 : 2
console.log(suite()) // passage numero 3 : 3
console.log(suite()) // passage numero 4 : 5*/


let suite2 = creerLaSuiteDeFibonacci(10,11);

/*console.log(suite2()) // passage numero 1 : 
console.log(suite2()) // passage numero 2 : 
console.log(suite2()) // passage numero 3 : 
console.log(suite2()) // passage numero 4 : */

// exercice 2 Q.4


//function creerMultiplicateurV2(multiple, valeur1=null) {
function creerMultiplicateurV2(params) {

	if('valeur1' in params) {
		return params.multiple * params.valeur1;
	} else {
		return function(valeur2) {
			return valeur2 * params.multiple;
		}
	}
}

let resultat = creerMultiplicateurV2({multiple:2});

let resultat2 = creerMultiplicateurV2({
	valeur1:5,
	multiple:2
});

console.log(resultat(10));
console.log(resultat2);

// exercice 2 Q.5


function powerv2(n, x=null) {

	if(x != null) {
		let resultat = 1;

		for(let compteur=0; compteur < n; compteur++) {
			resultat = resultat * x;
		}

		return resultat;

	} else {
		return function() {

		// definition du résultat.
		// cas aux limites : X^0 donne 1
		let resultat = 1;

		// boucle sur la puissance
		for(let compteur=0; compteur < n; compteur++) {
			resultat = resultat * x;
		}

		// on retourne le résultat
		return resultat;

		}
	}
}
//console.log(powerv2)