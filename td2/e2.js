'use strict'

// exercice 1 . 1

function range(debut,fin) {
	let retour = [];

	if(debut <= fin) {
		while(debut <= fin) {
			retour.push(debut);
			debut++;
		}
	} else {
		while(debut > fin) {
			retour.push(debut);
			//retour[] = debut;
			debut--;
		}
	}

	return retour;
}


/*console.log(range(1,5)) // 1, 2 , 3, 4, 5

console.log(range(5, 1)) // 5, 4, 3, 2, 1 */


// exercice 1 . 2
/*
function sum(entiers) {
	let somme=0;

	let count=entiers.length;
	
	for(let i=0;i<count;i++){
		
		somme=somme+entiers[i];
	
	}
	return somme;
}
*/

function sum(entiers) {
	const reducer = (somme, valeurCourante) => somme + valeurCourante;
	
/*	
	const reducer = function (accumulator, currentValue) {
		return accumulator + currentValue;
	}

	function reducer(accumulator, currentValue) {
		return accumulator + currentValue;
	}

	*/

	return entiers.reduce(reducer);

}
//console.log(sum([1,5,2])) // 8
//console.log(sum([3,2])) // 5


/*function moyenne(tableau) {
	let som = 0;

	for(let i=0; i< tableau.length; i++){
		som = som + tableau[i];
	}

	return som / tableau.length;
}*/

function moyenne(tableau) {
	let moyenne = 0;

	moyenne = sum(tableau) / tableau.length;

	return moyenne;
}


//console.log(moyenne([2,4,6])) // 4
//console.log(moyenne([1,3])) // 2

//exercice 1 . 4


function trouverMot(chaines, recherche) {

	const result = chaines.filter(element => 
		element.toLowerCase().includes(recherche.toLowerCase())
	);


	return result.map(currentValue => {
		return currentValue.toUpperCase()
	});
}

//console.log(trouverMot(chaines, 'bonjour'))


function traitementTableau(tableau, testFnct, transFnct) {

	const result = chaines.filter(testFnct);

	return result.map(transFnct);

}

let chaines = [
	'Bonjour à tous',
	'Salut à tous',
	'Bien le bonjour'
];
/*
console.log(
	traitementTableau(chaines, (valeur) => {
		return valeur.toLowerCase().includes('bonjour');
	}, (valeur) => {
		return valeur.toUpperCase()
	})
)


console.log(
	traitementTableau(chaines, (valeur) => {
		return valeur.includes('Salut');
	}, (valeur) => {
		return valeur.toLowerCase()
	})
)


console.log(
	traitementTableau(chaines, (valeur) => {
		return valeur.includes('à');
	}, (valeur) => {
		return valeur
	})
)
*/

// exercice 2 . 1

function analyser(tableau) {

	return {
		elements : tableau.length,
		somme : sum(tableau),
		moyenne: moyenne(tableau)
	}
}

let entiers = [1, 8, 7, 12];
//console.log(analyser(entiers)) 
/* {
	elements : 4,
	somme : 28,
	moyenne : ??
}*/

// exercice 2 . 2
// exercice 2 . 3

let etudiant = {
	numero : '09999',
	nom : 'Martin',
	prenom : 'Sylvie',
	dateNaisse : new Date('2000-04-12'),
	mail : 'martin.sylvie@gmail.com',
	notes : [],
	age : function() {
	    let ageDifMs = Date.now() - this.dateNaisse.getTime();

    	let ageDate = new Date(ageDifMs); // miliseconds from epoch
    	
    	return Math.abs(ageDate.getUTCFullYear() - 1970);
	},
	presentation() {

		let date = 	this.dateNaisse.getDate()+'/'+
					(this.dateNaisse.getMonth()+1)+'/'+
					this.dateNaisse.getUTCFullYear();

		console.log(this.nom.toUpperCase()+' '+this.prenom+' '+date);
	},
	ajouterNote(matiere, note) {
		let objetNote = {
			matiere : matiere,
			note : note
		};

		this.notes.push(objetNote);
	},
	moyenne() {
		let somme = 0;
		this.notes.forEach(objetNote =>  {
			somme += objetNote.note;
		})

		return somme / this.notes.length;
	},
	meilleureNote() {
		
	},
	pireNote() {
		
	}
}
console.log(etudiant.age());
etudiant.presentation();
etudiant.ajouterNote('PHP',5);
etudiant.ajouterNote('Expr comm',15);
etudiant.ajouterNote('HTML',19);
etudiant.ajouterNote('Anglais',2);
etudiant.ajouterNote('JS',19);
etudiant.ajouterNote('Maths',9);
console.table(etudiant.notes);
console.table(etudiant.moyenne());


