// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const items = document.querySelectorAll('li');

for (const item of items) {
  item.classList.add('ativo');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const chave in window) {
  console.log(chave + ': ' + window[chave]);
}
