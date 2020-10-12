/**
TD5 JQUERY - 12/10/2020
*/

$(document).ready(() => {

	let td = {
		modules : {

		}
	};


	td.modules.exercice1 = (function() {
		return {
			toggleClasses(e) {
				// intervetir les deux classes sur l'element
				$(e.target).toggleClass('zap hop');
			},
			init() {
				console.log('Exercice 1 : texte')
				// lier toggleClasses au click sur l'element
				$('#changingText').on('click', this.toggleClasses )
			}
		}
	})();

	td.modules.exercice1.init();




	td.modules.exercice2 = (function() {
		return {
			agrandirBoite(e) {
				if($(e.target).hasClass('boite_orange')) {
					$(e.target).width('+=10');
				}
			},
			largeurinitiale(e) {
				$(e.target).width("");		
			},
			ajouterBoite() {
				let numero = $('.boite_orange').length + 1;
				let espace = ' ';
				let boite = `<div class="boite_orange">${numero}</div>`;

				let html = $('#square').html()
				$('#square').html(html+boite+espace)

			},
			changerApparence() {
				$('.boite_orange').toggleClass('boite_verte');
			},
			masquerOuAfficher() {
	//			$('#square').fadeToggle();
				$('.boite_orange').fadeToggle();
			},
			init() {
				console.log('Exercice 2 : boites oranges')

				//$('#square > .boite_orange').on('mouseover', this.agrandirBoite )
				$('#square').on('mouseover', this.agrandirBoite )
				
				//$(document).on('mouseover', '.boite_orange', this.agrandirBoite);

				$('#square > .boite_orange').on('click', this.largeurinitiale )


				$('#btnAdd').on('click', this.ajouterBoite )
				$('#btnChange').on('click', this.changerApparence )
				$('#btnFadeToggle').on('click', this.masquerOuAfficher )


			}
		}
	})();

	td.modules.exercice2.init();



	td.modules.exercice3 = (function() {
		return {
			masquerOuAfficher() {
				$('.slidingContent').slideToggle();
				$('.slidingContent').html("Exemple");
			},
			init() {
				console.log('Exercice 3 : slider');
				$('#showContent').on('click', this.masquerOuAfficher );

			}
		}
	})();

	td.modules.exercice3.init();




	td.modules.exercice4 = (function() {
		return {
			gestionDuMenu(e) {
				$('#menu > .menu > ul').hide();

				let parent = $(e.target).closest('.menu')
				parent.find('ul').show();

			},
			init() {
				console.log('Exercice 4 : menu');
				$('#menu > .menu').on('click', this.gestionDuMenu );

			}
		}
	})();

	td.modules.exercice4.init();


	td.modules.exercice5 = (function() {
		return {
			afficherModale(id) {
				$(id).fadeIn();
			},
			masquerModale() {
				$('.modal').fadeOut();
			},
			init() {
				console.log('Exercice 5 : fenêtre modale');
				$('.modal button').on('click', this.masquerModale());
				$('#btnModal').on('click', () => {
					this.afficherModale($('#choixModal').val()); 
				});
				$('.modal').on('click',this.masquerModale)

			}
		}
	})();

	td.modules.exercice5.init();
})
