const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Carrossel seta com looping - by: t3xdev
const btnAnt = document.querySelector("#btnAnt");
const btnProx = document.querySelector("#btnProx");
const image = document.querySelector("#imageCarrossel");

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

const btnContato = document.querySelector("#btnContato");
const contato = document.querySelector(".contato");
const btnEnviar = document.querySelector("#btnEnviar");
const form = document.querySelector("form");

let checked = false;
function checar() {
  if (checked == false) {
    form.className = "contato visibleOFF";
  } else {
    form.className = "contato visibleOn";
  }
}

btnContato.addEventListener("click", function () {
  checked = !checked;
  checar();
});

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const textarea = document.querySelector("#mensagem");

btnEnviar.addEventListener("click", function () {
  if (inputNome.value == "") {
    alert("Preencha o campo nome");
  } else if (inputEmail.value == "") {
    alert("Preencha o campo email");
  } else if (textarea.value == "") {
    alert("Preencha o campo mensagem");
  } else {
    checked = !checked;
    checar();
  }
});
