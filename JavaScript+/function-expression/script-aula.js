// console.log(somar(2, 3), somar2(2, 3));

// function somar(a, b) {
//   return a + b;
// }

// const somar2 = function (a, b) {
//   return a + b;
// };

// console.log(somar(2, 3), somar2(2, 3));

const somar = (a, b) => a + b;

console.log(somar(2, 3));

const instrumento = 'Violão';

// forma de isolar escopo antes dos modulos
(function () {
  const instrumento = 'Guitarra';
  console.log(instrumento);
})();

console.log(instrumento);
