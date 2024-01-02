// const upperName = (name) => {
//   return name.toUpperCase();
// };

// console.log(upperName('lucas'));

// function handleClick(event) {
//   //   const x = event.clientX;
//   //   const y = event.clientY;

//   // desestruturação
//   const { clientX, clientY } = event;

//   console.log(clientX, clientY);
// }

// desestruturação hardcore haha
// function handleClick({ clientX, clientY }) {
//   console.log(clientX, clientY);
// }

// document.addEventListener('click', handleClick);

// const frutas = ['banana', 'uva', 'tomato'];
// const [fruta1, fruta2] = frutas;

// console.log(fruta2);

// const useQuadrado = [
//   4,
//   function (lado) {
//     return 4 * lado;
//   },
// ];

// const [lados, perimetro] = useQuadrado;
// console.log(lados);
// console.log(perimetro(10));

// function showList(empresa, ...clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa);
//   });
// }

// showList('- Google', 'Andre', 'Lucas', 'Rafael', 'Maria', 'José', 'Renato');

// const numeros = [1, 2, 3, 4, 5, 6, 7];
// const maior = Math.max(...numeros);
// console.log(maior);

// const carro = {
//   cor: 'Azul',
//   portas: 4,
// };

// carroAno = { ...carro, ano: 2008 };

// console.log(carroAno);
