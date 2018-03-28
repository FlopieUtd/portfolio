var navLinks = document.querySelectorAll('.splash-screen__navigation > li');
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
