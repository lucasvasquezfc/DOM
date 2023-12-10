function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const lucas = new Pessoa('Lucas', 29);

// console.log(Pessoa.prototype);
// console.log(lucas.prototype);

// const listaAnimais = ['cachorro', 'gato', 'Cavalo'];

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String
