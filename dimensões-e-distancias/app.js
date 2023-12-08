const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const rect = primeiroh2.getBoundingClientRect();

// console.log(rect);

const primeiraImg = document.querySelector('img');

console.log(primeiraImg.offsetTop);

const imagens = document.querySelectorAll('img');

window.onload = () => {
  let soma = 0;
  imagens.forEach((item) => {
    soma += item.offsetWidth;
  });
  console.log('soma: ' + soma);
};

const links = document.querySelectorAll('a');
links.forEach((link) => {
  let larguraLink = link.offsetWidth;
  let alturaLink = link.offsetHeight;

  if (larguraLink >= 48 && alturaLink >= 48) {
    console.log(`O link #${link.innerHTML} possui o mínimo`);
  } else {
    console.log(`O link #${link.innerHTML} NÂO possui o mínimo`);
  }
});

const menu = document.querySelector('.menu');

if (window.matchMedia('(max-width: 720px)').matches) {
  menu.classList.add('menu-mobile');
}

console.log(menu);
