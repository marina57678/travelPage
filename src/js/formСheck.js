"use strict"
document.addEventListener('DOMContentLoaded', function () {
	const formBuy = document.getElementById('formBuy');
	formBuy.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		// проверим валидацию
		let error = formValidate(formBuy);
	}
	function formValidate(formBuy) {
		let error = 0;
		// req -require-обязательное поле
		// добавиим класс _req  к обязательным полям (в  нашей форме)
		// теперь в переменную forreq поступят объекты с классом _req
		let formReq = document.querySelectorAll('._req');
		// нужно создать цикл . будет бегать по объектам . 
		//получать каждый объект в конст инпут и будет работаь с ней
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input); // изначательно нужно убрать класс еррор , после проверка
			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			}
			else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			}
			else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
	}
	// добавим 2 доп функии которые будут дбавялть класс error нашему объекту 
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
		console.log('helpMe');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
	}
});