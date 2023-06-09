const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Carrossel seta com looping - by: t3xdev
let btnAnt = document.querySelector("#btnAnt");
let btnProx = document.querySelector("#btnProx");
let image = document.querySelector("#imageCarrossel");

const timeInterval = 3000;
let interval = setInterval(proxSlide, timeInterval);
let count = 1;

const oneImage = "images/IMG.jpg";
const twoImage = "images/IMG1.jpg";
const threeImage = "images/IMG2.jpg";

function slideAnt() {
  clearInterval(interval);
  interval = setInterval(proxSlide, timeInterval);
  count--;
  switch (count) {
    case 1:
      image.src = oneImage;
      break;
    case 2:
      image.src = twoImage;
      break;
    case 3:
      image.src = threeImage;
      break;
    default:
      image.src = threeImage;
      count = 3;
      break;
  }
}

function proxSlide() {
  clearInterval(interval);
  interval = setInterval(proxSlide, timeInterval);
  count++;
  switch (count) {
    case 1:
      image.src = oneImage;
      break;
    case 2:
      image.src = twoImage;
      break;
    case 3:
      image.src = threeImage;
      break;
    default:
      image.src = oneImage;
      count = 1;
      break;
  }
}
