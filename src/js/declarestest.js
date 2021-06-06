// window.onload = function () {
// 	document.getElementById('head-nav-link__contact').addEventListener('click', showContact);
// };
// const showContact = () => {
// 	console.log('statud were loaded');
// 	const url = 'http://localhost:8080/declares';
// 	ajaxDemoSample(url, (response) => {
// 		(response)
// 	}
// };
// const ajaxDemoSample = (url, callback) => {
// 	let xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = () => {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			callback(JSON.parse(xhr.responseText));
// 		}
// 	}

// 	xhr.open('Get', url);
// 	xhr.send();
// }