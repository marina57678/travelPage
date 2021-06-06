const buttonGo = document.querySelectorAll('.full-screen__button[data-goto]');
if (buttonGo.length > 0) {
	buttonGo.forEach(buttonGo => {
		buttonG.addEventListener("click", onButtonGoClick);
	});
	function onButtonGoClick(e) {
		const buttonG = e.target;
		if (buttonG.dataset.goto && document.querySelector(buttonG.dataset.goto)) {
			const gotoHead = document.querySelector(buttonG.dataset.goto);
			const gotoHeadValue = gotoHead.getBoundingClientRect().top + pageYOffset;
			window.scrollTo({
				top: gotoHeadkValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}