const back = document.querySelector(".splash-screen-back");
const middle = document.querySelector(".splash-screen-middle");
const front = document.querySelector(".splash-screen-front");
const center = document.querySelector(".center");

const num = Math.floor(Math.random() * 3) + 1;

back.style.background = `url(./images/background-${num}/back.jpg) no-repeat center center`;
middle.style.background = `url(./images/background-${num}/middle.png) no-repeat center center`;
front.style.background = `url(./images/background-${num}/front.png) no-repeat center center`;

const navLinks = document.querySelectorAll(".splash-screen__navigation > li");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    scrollTo(e.target.innerHTML.toLowerCase());
  });
}

function scrollTo(destination) {
  document.querySelector("." + destination).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  const imgPos = top / 2;
  back.style.transform = `translateY(${imgPos}px)`;
  center.style.transform = `translateY(${imgPos * 0.5}px)`;
  middle.style.transform = `translateY(${imgPos * 0.15}px)`;
}
