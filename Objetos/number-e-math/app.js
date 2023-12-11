// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.round(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

let num = numeros.replaceAll(' ', '').split(',');

let maiorNumero = 0;
num.forEach((item) => {
  if (Number(item) > maiorNumero) maiorNumero = Number(item);
});

console.log(maiorNumero);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').replace(',', '.').trim();
  return preco.toFixed(2);
}

let soma = 0;
listaPrecos.forEach((item, idx, arr) => {
  arr[idx] = +limparPreco(item);
  soma += +limparPreco(item);
});

console.log(listaPrecos);
console.log(
  soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
);
