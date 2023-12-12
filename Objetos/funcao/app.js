// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll('p');
const arrayP = Array.from(p);

const total = arrayP.reduce((anterior, atual) => {
  return anterior + atual.innerText.length;
}, 0);

console.log(total);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

let criarElemento = function (tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
};

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const body = document.querySelector('body');

const cursosJS = h1Titulo('Curso de JavaScript');
const cursosHTML = h1Titulo('Curso de HTML5');

body.appendChild(cursosHTML);
body.appendChild(cursosJS);

console.log(cursosHTML, cursosJS);
