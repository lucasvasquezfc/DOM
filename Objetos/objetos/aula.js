const pessoa = new Object({
  nome: 'Lucas',
});

console.log(pessoa);

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  },
};

const honda = Object.create(carro).init('Honda');

console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrari');

console.log(ferrari.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel);

const moto2 = {
  rodas: 2,
};

console.log(moto);
