const button = document.querySelector('.full-screen__button');
const formBuy = document.querySelector('.formBuy');
const activeButton = document.querySelector('.full-screen__body')
const closeButton = document.querySelector('.formBuy__buttonClose')

if (button) {
	button.addEventListener('click', () => {
		document.body.classList.add('_lock');
		activeButton.classList.add('full-screen__body__active');
		formBuy.classList.add('formBuy__active');
	});
}
if (closeButton) {
	closeButton.addEventListener('click', () => {
		document.body.classList.remove('_lock');
		activeButton.classList.remove('full-screen__body__active');
		formBuy.classList.remove('formBuy__active');
	});
}
// добавить если пользователь много раз кликнул , подсказку ,что закрыть тут