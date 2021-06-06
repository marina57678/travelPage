alert("работает");
window.onscroll = function showHead1() {
	const head = document.querySelector('.header');
	const secondNav = document.querySelector('.second-nav');
	if (window.pageYOffset > 1080) {
		secondNav.classList.add('second-nav-fixed');
	}
	else if (window.pageYOffset > 780) {
		head.classList.add('head-fixed');
	}

	else {
		head.classList.remove('head-fixed');
		secondNav.classList.remove('second-nav-fixed');
	}
}


// const menuLinks = document.querySelectorAll('.head-nav-link[data-goto]');
// if (menuLinks.length > 0) {
// 	menuLinks.array.forEach(menuLinks => {
// 		menuLink
// 	});
// }