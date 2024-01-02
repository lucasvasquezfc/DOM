// const upperName = (name) => {
//   return name.toUpperCase();
// };

// console.log(upperName('lucas'));

// function handleClick(event) {
//   //   const x = event.clientX;
//   //   const y = event.clientY;

//   // desestruturação
//   const { clientX, clientY } = event;

//   console.loquadrado;lientX, clientY);
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

// import quadrado from './quadrado.js';
// import numeroAleatorio from './numeroAleatorio.js';

// console.log(quadrado.perimetroQuadrado(5));
// console.log(numeroAleatorio());

// https://api.chucknorris.io/jokes/random

// fetch('https://api.chucknorris.io/jokes/random')
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// }

// const produtos = fetchProdutos('https://api.chucknorris.io/jokes/random');

// console.log(produtos);

// const precos = [
//   'Crédito',
//   'R$ 200',
//   'R$ 400',
//   'Contas Pagar',
//   'R$ 300',
//   'R$ 400',
//   'Meus dados',
// ];

// const precosFiltro = precos.filter((p) => p.includes('R$'));
// const precosNumeros = precosFiltro.map((p) => Number(p.replace('R$ ', '')));

// console.log(precosNumeros);

// const grupoA = 100;
// const grupoB = 200;

// if (grupoA > grupoB) {
//   console.log('Grupo A, ganhou!');
// } else {
//   console.log('Grupo B, ganhou!');
// }

// const vencedor = grupoA > grupoB ? 'Grupo A, ganhou!' : 'Grupo B, ganhou!';
// console.log(vencedor);

// const active = true;
// const button = active && 'Botão está ativo';

// console.log(button);
