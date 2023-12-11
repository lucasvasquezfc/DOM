console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.42424242));

console.log(parseFloat('   32434.343'));
console.log(parseFloat(' 100.27 reais'));
console.log(parseInt('100.27 reais', 10));
console.log(parseInt(23.49, 10));

const preco = 10.32323;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(valor);
