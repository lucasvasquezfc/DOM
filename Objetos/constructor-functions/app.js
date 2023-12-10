// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   },
// };

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function () {
//     this.element().classList.add('ativar');
//   };
// }

// const li = new Dom('li');

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade + ' anos';
  this.andar = function () {
    console.log(nome + ' de ' + idade + ' anos andou');
  };
}

const lucas = new Pessoa('Lucas', 29);
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// lucas.andar();
// joao.andar();
// maria.andar();
// bruno.andar();

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;

  this.addClass = function (classe) {
    this.elements.forEach((item) => {
      item.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((item) => {
      item.classList.remove(classe);
    });
  };
}
const listaItens = new Dom('li');

listaItens.addClass('ativo');

const listaUl = new Dom('ul');

listaUl.addClass('teste');

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
