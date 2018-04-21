const splashScreen = document.querySelector('.splash-screen-background');

const navLinks = document.querySelectorAll('.splash-screen__navigation > li');
navLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		scrollTo(e.target.innerHTML.toLowerCase());
	})
})

function scrollTo (destination) {
	document.querySelector('.' + destination).scrollIntoView({ 
	  behavior: 'smooth',
	  block: 'start'
	});
}

window.addEventListener('scroll', handleScroll);

function handleScroll () {
	const doc = document.documentElement;
	const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	const imgPos = top / 2 + 'px';
	splashScreen.style.transform = 'translateY(' + imgPos + ')';
}