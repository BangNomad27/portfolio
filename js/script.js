// ! ===== Area Navbar =====
window.addEventListener('scroll', function() {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

$(document).on('click', 'ul li', function() {
	$(this).addClass('btn-active').siblings().removeClass('btn-active');
});

// ! ===== Area Button Toggle =====
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}
menuToggle.onclick = toggleMenu;
menu.onclick = toggleMenu;

// ! ===== Area Parallax =====
$(window).scroll(function() {
	let skillScroll = $(this).scrollTop();

	if(skillScroll > $('.skills').offset().top - 400) {
		$('.skills .slider-left, .slider-right').each(function(el) {
			setTimeout(function() {
				$('.skills .slider-left, .slider-right').eq(el).addClass('slider');
			}, 300 * (el + 1));
		});
	}
});

// ! ===== Area Typing Animation =====
let typed1 = new Typed(".typing1", {
	strings: ["Mahasiswa", "Web Developer", "Web Design", "Gamer", "Blogger"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});