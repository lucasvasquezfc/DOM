// function createButton(text) {
//   const numeroSecreto = 'asdalsjdalskjd';

//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
//   const obj = {
//     text,
//     element,
//   };
//   return obj;
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) return new Pessoa(nome);

  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa('Lucas');

console.log(designer.andar());
