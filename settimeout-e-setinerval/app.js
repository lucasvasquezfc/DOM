// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.querySelector('body');

// const contarAte10 = setInterval(time, 1000 * 2);

// let i = 0;
// function time() {
//   i++;
//   body.style.backgroundColor = i % 2 ? 'blue' : 'red';
//   if (i > 10) {
//     clearInterval(contarAte10);
//   }
// }

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const h1 = document.querySelector('h1');

let i = 0;
let timer;
let ativo = false;

function cronometro() {
  if (ativo) {
    clearInterval(timer);
    ativo = false;
  } else {
    timer = setInterval(() => {
      h1.innerHTML = i;
      i++;
    }, 100);
    ativo = true;
  }
}

function resetar() {
  clearInterval(timer);
  ativo = false;
  i = 0;
  h1.innerHTML = i;
  // cronometro();
}

body.addEventListener('click', cronometro);
body.addEventListener('dblclick', resetar);
