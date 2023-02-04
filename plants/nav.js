// This is a function for burger Menu:

function navToggle() {

	let navBtn = document.getElementById('navBtn');

	let mainNav = document.getElementById('mainNav');

	navBtn.onclick = function () {

		let heightNav = mainNav.firstElementChild.offsetHeight;

		if (mainNav.classList.contains('nav-hidden')) {

			mainNav.classList.remove('nav-hidden');

			mainNav.style.height = heightNav + 'px';

		} else {

			mainNav.classList.add('nav-hidden');

			mainNav.style.height = 0;

		}

	}


	window.addEventListener("resize", resizeHandler, false);

	function resizeHandler() {

		let heightNav = mainNav.firstElementChild.offsetHeight;

		if (document.documentElement.clientWidth >= 700) {

			mainNav.style.height = 'auto';

		} else {

			if (mainNav.classList.contains('nav-hidden')) {

				mainNav.style.height = 0;

			} else {

				mainNav.style.height = heightNav + 'px';

			}

		}

	}

}
navToggle();

// This is function for service-block

//This is a function for accordion in prices-block

document.querySelectorAll('.prices-accordion').forEach((el) => {
	el.addEventListener('click', () => {
		let accordionContent = el.nextElementSibling;

		if (accordionContent.style.maxHeight) {
			document.querySelectorAll('.accordionContent').forEach((el) => el.style.maxHeight = null)
		} 
		else {
			document.querySelectorAll('.accordionContent').forEach((el) => el.style.maxHeight = null)
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
		}
	})
})
function myFunctionAccordion() {
	document.getElementById("accordionBg").style.backgroundColor = '#D6E7D2';
	document.getElementById("accordionBg2").style.backgroundColor = '#D6E7D2';
	document.getElementById("accordionBg3").style.backgroundColor = '#D6E7D2';
}
function myFunctionAccordionTitle() {
	document.getElementById("accordionTitle").style.backgroundColor = 'transparent';
}
function myFunctionAccordionTitle2() {
	document.getElementById("accordionTitle2").style.backgroundColor = 'transparent';
}
function myFunctionAccordionTitle3() {
	document.getElementById("accordionTitle3").style.backgroundColor = 'transparent';
}