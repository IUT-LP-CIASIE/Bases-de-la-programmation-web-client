/*
TD 3 : MONSTER
*/

'use strict'

let monster = {
	modules : {
		app : {},
		actions : {}
	}
}







monster.modules.app = (function() {

	// boutons divers
	let boutonShow = document.querySelector('#show');
	let actionBox = document.querySelector('#actionbox');
	let status = document.querySelector('#status');
	let boutonKill = document.querySelector('#kill');
	let boutonRset = document.querySelector('#reset');
	
	// boutons d'actions
	let activites = {
		run : document.querySelector('#run'),
		fight : document.querySelector('#fight'),
		eat : document.querySelector('#eat'),
		work : document.querySelector('#work')
	}

	let boutonSleep = document.querySelector('#sleep');

	// object retourné par app
	return {
		
		// afficher un message dans la log
		log(message){
			let p = document.createElement('p');
			p.innerHTML = message;
			actionBox.prepend(p);
		},
		
		// afficher le status du monstre
		displayStatus(life, money, awake){
			let tmpAwake = awake ? "awake" : "asleep";
			status.innerHTML ="<li>life:"+life+"</li> <li>money:"+money+"</li> <li>"+tmpAwake+"</li>";
		},

		// fonction qui démarre l'app
		start() {
			console.log('Début de la vie du monstre');

			monster.modules.actions.init("Bob", 100, 100, true);
			monster.modules.actions.showMe();
			monster.modules.actions.showName();


			// écouteurs d'evenements
			boutonShow.addEventListener('click', 
				monster.modules.actions.showMe);
			for (let action in activites) {
				let btn = activites[action];
				btn.addEventListener('click', monster.modules.actions[action])
			}


			boutonKill.addEventListener('click', 
				monster.modules.actions.kill)

			boutonRset.addEventListener('click', 
				monster.modules.app.start)

			boutonSleep.addEventListener('click', 
				monster.modules.actions.sleep)

			if(window.si) {
				clearInterval(window.si);
			}
			window.si = setInterval(function() {
				monster.modules.actions.activiteAuHasard(activites)
			},12000);

		}

	}
	
})();


monster.modules.actions = (function() {

	// définir ici toutes les actions (méthodes) 
	// possibles du monstre

	let name, life, money, awake;


	return {
		activiteAuHasard(activites) {
			monster.modules.actions.agir(function(){
				life--;
				monster.modules.actions.showMe();

				let keys = Object.keys(activites);
				let activite = keys[ keys.length * Math.random() << 0];

				monster.modules.actions[activite]();
			});
		},
		sleep() {
			monster.modules.actions.agir(function(){
				awake=false;

				setTimeout(function() {
					awake=true;	
					life++;
					monster.modules.app.log('Le monstre se réveille');
					monster.modules.actions.showMe();
				},10000);

				return 'le monstre s\'endort';
			});
		},
		fight() {
			monster.modules.actions.agir(function(){
				life-=3;
				return 'Le monstre viens de se battre';
			})
		},
		run() {
			monster.modules.actions.agir(function() {
				life--;
				return 'Le monstre viens de courrir';
			})
		},
		eat() {
			monster.modules.actions.agir(function() {
				if(money>2) {

					money-=3;
					life+=2

					return 'Le monstre a mangé';
				} else {
					return 'le monstre est trop pauvre pour manger';
				}
			})
		},

		work() {
			monster.modules.actions.agir(function() {
				money+=2;
				life--;

				return 'Le monstre a travaillé';
			})
		},

		// faire une action		
		agir(actionMonstre) {
			let message;
			let agir =false;

			if(awake) {
				if(life>0) {
					agir=true;
					message = actionMonstre();
					monster.modules.actions.showMe();
				} else {
					message = "Action impossible: Le monstre est mort.";
				}
			} else {
				message = "Action impossible: Le monstre est endormi.";
			}
			if(typeof message != 'undefined') {
				monster.modules.app.log(message);
			}

			if(agir && life<1) {
				monster.modules.app.log("Le monstre viens de mourrir.");
				clearInterval(window.si);
			}


		},
		kill(){
			monster.modules.actions.agir(function() {
				life=0;
			});
		},
		showMe(){
			monster.modules.app.displayStatus(life, money, awake);
		},
		showName(){
			monster.modules.app.log("Le monstre se nomme "+name);
		},

		init(nom, vie, argent, rev){
			name = nom;
			life = vie;
			money = argent;
			awake = rev;

		}
	}

})();

window.addEventListener('load',monster.modules.app.start);
