// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaTaxa = 0;
transacoes.forEach((elemento) => {
  if (elemento.descricao.includes('Taxa')) {
    somaTaxa += +elemento.valor.slice(3);
  }
});

let somaRecebimento = 0;
transacoes.forEach((elemento) => {
  if (elemento.descricao.includes('Recebimento')) {
    somaRecebimento += +elemento.valor.slice(3);
  }
});
console.log(`Taxa: [${somaTaxa}] e Recebimento: [${somaRecebimento}]`);

// // Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesArray = transportes.split(';');
console.log(transportesArray);

// // Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

let htmlArray = html.replaceAll('span', 'a');

console.log(htmlArray);

// // Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.substring(--frase.length));

// Retorne o total de taxas
const transacoes2 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let dadosTratados = [];

transacoes2.forEach((valor) => {
  dadosTratados.push(valor.trim());
});

console.log(dadosTratados);
