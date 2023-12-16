// Remova o erro
const priceNumber = (n) => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const instrumento = 'Teclado';
(function () {
  const instrumento = 'Baixo';
  console.log(instrumento);
})();
console.log(instrumento);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();
//  é uma funcao que recebe uma funcao como parametro

active(() => {
  console.log('teste');
});
