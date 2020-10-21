		// Aktywacja rozwijanego menu //
		var klik = document.getElementById('okno');
		klik.addEventListener('click', nacisk);

		function nacisk() {
			var k = document.getElementById('lista');
			if (k.style.display === "none") {
				k.style.display = "block";
			} else {
				k.style.display = "none";
			}
		}

		// Aktywacja listy z projektami 
		var lista2 = document.getElementById('listaUnActiv');
		lista2.addEventListener('click', rozw, false);

		function rozw() {
			var n = document.getElementById('listaActive');
			var i = document.getElementById('listaUnActiv');
			k = n.getElementsByTagName('a');

			if (n.style.display === "none") {
				n.style.display = "block";
				i.style.height = "4.8rem";
			} else {
				n.style.display = "none";
				i.style.height = "20px";
			}
		}

		//====== Przeskakiwane menu =====
		jQuery(function ($) {
			//reset scrola
			$.scrollTo(0);

			$('#skil').click(function () {
				$.scrollTo($('#skilTo'), 1200);
				document.getElementById('lista').style.display = "none";
			});

			$('#curent').click(function () {
				$.scrollTo($('#curentTo'), 1200);
				document.getElementById('lista').style.display = "none";
			});

			$('#fin').click(function () {
				$.scrollTo($('#finTo'), 1200);
				document.getElementById('lista').style.display = "none";
			});

			$('#kno').click(function () {
				$.scrollTo($('#knoTo'), 1200);
				document.getElementById('lista').style.display = "none";
			});

			$('#con').click(function () {
				$.scrollTo($('#conTo'), 1200);
				document.getElementById('lista').style.display = "none";
			});

		});


		// Przewiniecie na poczatek strony
		$(document).ready(function () {
			var bt = $('#idz');

			bt.click(function (event) {
				$("html, body").animate({
					scrollTop: 0
				}, 'slow');
				event.preventDefault();
			});
		});
