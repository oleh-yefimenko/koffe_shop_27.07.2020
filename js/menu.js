let wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function () {
	wrapperMenu.classList.toggle('open');
});

$(document).ready(function () {
	$('.wrapper-menu').click(function (event) {
		$('.wrapper-menu, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
