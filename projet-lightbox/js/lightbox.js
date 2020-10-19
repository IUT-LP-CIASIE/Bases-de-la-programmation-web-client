"use strict"

let lightbox = {
	modules : {

	}
}

lightbox.modules.actions = (function() {
	return {
		pleinEcran() {
			let body = document;
			if (body.requestFullscreen) {
				body.requestFullscreen();
			} else if (body.mozRequestFullScreen) { /* Firefox */
				body.mozRequestFullScreen();
			} else if (body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
				body.webkitRequestFullscreen();
			} else if (body.msRequestFullscreen) { /* IE/Edge */
				elem.msRequestFullscreen();
			}
		},
		ouvrirProchaineImage() {
			let imageCourante = lightbox.modules.actions.lightboxOuverte();
			if(imageCourante) {
				let next =imageCourante.next();
				if(!next.length)  {
					next = $('.vignette').first();
				}
				lightbox.modules.actions.ouvrirLightbox(next)
			}
		},
		ouvrirPrecedenteImage() {
			let imageCourante = lightbox.modules.actions.lightboxOuverte();
			if(imageCourante) {
				let prev =imageCourante.prev();
				if(!prev.length)  {
					prev = $('.vignette').last();
				}
				lightbox.modules.actions.ouvrirLightbox(prev)
			}
		},
		lightboxOuverte() {
			if($('body').attr('data-lightbox') == 'open') {
				let img = $('#lightbox div img').attr('src');
				return $(`img[data-img="${img}"]`).closest('.vignette');
			}
		},
		ouvrirLightbox(vignette) {
			let img = $(vignette).find('img').data('img')
			let txt = $(vignette).find('div').html()
			console.log(txt)
			$('#lightbox div').html('<img src="'+img+'">');
			$('#lightbox p').html(txt);
			$('body').attr('data-lightbox','open')
		},
		fermerLightbox() {
			$('body').attr('data-lightbox','close')
		},
		afficherGrandeImage(e) {
			let vignette = $(e.target).closest('.vignette');

			lightbox.modules.actions.ouvrirLightbox(vignette);
		},
		creerLightbox() {
			let html = `
			<div id="lightbox">
			<nav>
			<button data-action="fullscreen">□</button>
			<button data-action="close">+</button>
			</nav>

			<button data-action="nav" data-nav="left">^</button>
			<button data-action="nav" data-nav="right">^</button>
			<div></div>
			<p></p>
			</div>
			`;
			$(html).appendTo('body');
		}
	}
})();

lightbox.modules.app = (function() {
	return {
		init() {
			let actions = lightbox.modules.actions;
			
			actions.creerLightbox();

			let vignettes = $('.gallery-container .vignette');
			let close = $('[data-action="close"]');
			let fullscreen = $('[data-action="fullscreen"]');
			let nav = $('[data-action="nav"]');


			vignettes.on('click',actions.afficherGrandeImage)

			close.on('click',actions.fermerLightbox);
			
			fullscreen.on('click',actions.pleinEcran);
			

			nav.on('click',() =>{
				if($(this).data('nav') == 'right') {
					actions.ouvrirProchaineImage()

				} else {
					actions.ouvrirPrecedenteImage()
				}
			});

			$(document).on('keyup',(e) => {
				let key = e.key;
				if(key == 'Escape') {
					actions.fermerLightbox();
				} else if(key == 'ArrowRight') {
					actions.ouvrirProchaineImage()
				} else if(key == 'ArrowLeft') {
					actions.ouvrirPrecedenteImage()
				}

			})
		}
	}
})();


window.onload = lightbox.modules.app.init;
