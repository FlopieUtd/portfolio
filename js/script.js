const splashScreen = document.querySelector('.splash-screen-background');
const center = document.querySelector('.center');

const navLinks = document.querySelectorAll('.splash-screen__navigation > li');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function (e) {
    scrollTo(e.target.innerHTML.toLowerCase());
  })
}

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
	const imgPos = top / 2;
	splashScreen.style.transform = `translateY(${imgPos}px)`;
	center.style.transform = `translateY(${imgPos * .45}px)`;
}