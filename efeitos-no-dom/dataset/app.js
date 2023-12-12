// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

const animaisDescricao = document.querySelector('.animais-descricao');
const sectionAnimais = document.querySelectorAll('.animais-descricao section');

// console.log(sectionAnimais);

sectionAnimais.forEach((item) => {
  item.dataset.anime = 'show-down';
});

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
