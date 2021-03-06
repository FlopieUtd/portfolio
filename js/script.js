const back = document.querySelector(".splash-screen__back");
const middle = document.querySelector(".splash-screen__middle");
const front = document.querySelector(".splash-screen__front");
const center = document.querySelector(".center");
const white = document.querySelector(".splash-screen__white");

const num = Math.floor(Math.random() * 3) + 1;

const url1 = `./images/background-${num}/back.jpg`;
const url2 = `./images/background-${num}/middle.png`;
const url3 = `./images/background-${num}/front.png`;

back.style.background = `url(${url1}) center center / cover repeat`;
middle.style.background = `url(${url2}) center center / cover repeat`;
front.style.background = `url(${url3}) center center / cover repeat`;

let ready = 0;

[url1, url2, url3].forEach((url) => {
  const img = new Image();
  img.onload = () => {
    ready += 1;
    if (ready === 3) {
      white.style.opacity = 0;
    }
  };
  img.src = url;
  if (img.complete) img.onload();
});

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
