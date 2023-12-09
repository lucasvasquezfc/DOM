// const img = document.querySelectorAll('img');

// const clickHandler = (event) => {
//   console.log(event);
// };

// img.forEach(() => {
//   this.addEventListener('click', clickHandler);
// });

// const animaisLista = document.querySelector('.animais-lista');

// const callbackLista = (event) => {
//   console.log(event.currentTarget);
//   console.log(event.target);
// };

// animaisLista.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//   event.preventDefault();
//   console.log('clicou');
// }

// linkExterno.addEventListener('click', handleLinkExterno);a

// function handleKeyBoard(e) {
//   if (e.key === 'a') {
//     document.body.classList.toggle('azul');
//   }
// }

// window.addEventListener('keydown', handleKeyBoard);

// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute('src'));
// }

// imgs.forEach((event) => {
//   event.addEventListener('click', handleImg);
// });

const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();

  links.forEach((link) => link.classList.remove('ativo'));

  event.currentTarget.classList.add('ativo');
}

links.forEach((link) => {
  link.addEventListener('click', handleLink);
});

const todosElementos = document.querySelectorAll('body *');

function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
  // event.target.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleClick);
});

let soma = 1;

function handleKeyBoard(event) {
  const body = document.querySelector('body');
  if (event.key === 't') {
    soma = soma + 0.5;
    let size = soma + 'rem';
    body.style.fontSize = size;
  }
  if (event.key === 'r') {
    soma = soma - 0.5;
    let size = soma + 'rem';
    body.style.fontSize = size;
  }
}

window.addEventListener('keydown', handleKeyBoard);
