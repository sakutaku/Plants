// Block Header (burger menu).

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

const serviceBtn1 = document.getElementById("btn1");
const serviceBtn2 = document.getElementById("btn2");
const serviceBtn3 = document.getElementById("btn3");
const cards = document.querySelectorAll('.service-cards');

document.querySelectorAll('.service-btns').forEach((el) => {
	el.addEventListener('click', e => {
		const clickedBtn = e.target;
		if (clickedBtn === serviceBtn1) {
			cards[1].classList.add('blur');
			cards[2].classList.add('blur');
			cards[3].classList.add('blur');
			cards[5].classList.add('blur');
			cards[0].classList.remove('blur');
			cards[4].classList.remove('blur');
			serviceBtn1.classList.add('service-btns-active');
		} else if (clickedBtn === serviceBtn2) {
			serviceBtn2.classList.add('service-btns-active');
			cards[0].classList.add(`blur`);
			cards[1].classList.add('blur');
			cards[2].classList.remove('blur');
			cards[4].classList.add('blur');
			cards[5].classList.add('blur');
			
		} else if (clickedBtn === serviceBtn3) {
			cards[0].classList.add('blur');
			cards[2].classList.add('blur');
			cards[4].classList.add('blur');
			cards[5].classList.add('blur');
		}
	})
});
console.log(cards);

// Block Prices.

document.querySelectorAll('.prices-accordion').forEach((el) => {
	el.addEventListener('click', () => {
		let accordionContent = el.nextElementSibling;
		

		if (accordionContent.style.maxHeight) {
			document.querySelectorAll('.accordionContent').forEach((el) => el.style.maxHeight = null);
			
		} 
		else {
			document.querySelectorAll('.accordionContent').forEach((el) => el.style.maxHeight = null)
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
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

// Block Contacts.

const dropDownBtn = document.querySelector('.dropdown-btn');
const dropDownList = document.querySelector('.dropdown-list');
const dropDownListItem = document.querySelectorAll('.dropdown-list-item');
console.log(dropDownListItem);
const dropDownListItems = dropDownList.querySelectorAll('.dropdown-list-item');

// Клик по кнопке. Открыть / Закрыть select 

dropDownBtn.addEventListener('click', function () {
	dropDownList.classList.toggle('dropdown-list-active');
	if(dropDownList.classList.contains('dropdown-list-active')) {
		console.log('saya im here');
		document.querySelector('.select-block-info-inner1').style.display = 'none';
	} else {
		document.querySelector('.select-block-info-inner1').style.display = 'block';
	}
})

// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун

dropDownListItems.forEach(function (listItem) {
	listItem.addEventListener('click', function (e) {
		e.stopPropagation();
		dropDownBtn.innerText = this.innerText;
		dropDownBtn.focus();
		dropDownList.classList.remove('dropdown-list-active');
	})
})
// Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
	if (e.target !== dropDownBtn) {
		dropDownList.classList.remove('dropdown-list-active');
	}
})
// Нажатие на Tab или Escape для закрытия дропдауна
document.addEventListener('keydown', function (e) {
	if (e.key === 'Tab' || e.key === 'Escape') {
		dropDownList.classList.remove('dropdown-list-active');
	}
});

const state = document.querySelector('.state');
const phoneNum = document.querySelector('.phoneNum');
const adress = document.querySelector('.adress');

dropDownListItem.forEach((item, i) => {
	item.addEventListener('click', () => {
		document.querySelector('.select-block-info-inner1').style.display = 'block';
		if (i === 1) {
			state.innerHTML = 'New York City';
			phoneNum.innerHTML = '+1 212 456 0002';
			adress.innerHTML = '9 East 91st Street';

		} else if (i === 2) {
			state.innerHTML = 'Yonkers, NY';
			phoneNum.innerHTML = '+1 914 678 0003';
			adress.innerHTML = '511 Warburton Ave';
		} else if (i === 3) {
			state.innerHTML = 'Sherrill, NY';
			phoneNum.innerHTML = '+1 315 908 0004';
			adress.innerHTML = '14 WEST Noyes BLVD';
		} else if (i === 0) {
			state.innerHTML = 'Canandaigua, NY';
			phoneNum.innerHTML = '+1 585 393 0001';
			adress.innerHTML = '151 Charlotte Street';
		}
	})
});


