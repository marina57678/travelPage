// const burger = document.querySelector('.burger-line');
// console.log(burger);


const burger = document.querySelector('.head-burger');
const menuBody = document.querySelector('.menu_body');
if (burger) {
	burger.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('burger_active');
		menuBody.classList.toggle('_active');
	});
}


const menuLinks = document.querySelectorAll('.head-nav-link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
			if (menuBody.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				menuBody.classList.remove('_active');
				burger.classList.remove('burger_active');
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}