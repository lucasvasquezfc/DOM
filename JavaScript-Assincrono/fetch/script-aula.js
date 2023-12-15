const conteudo = document.querySelector('.conteudo');
const styles = document.createElement('style');

fetch('https://viacep.com.br/ws/26379020/json/')
  .then((r) => r.text())
  .then((body) => {
    conteudo.innerText = body;
  });

fetch('./style.css')
  .then((r) => r.text())
  .then((body) => {
    styles.innerHTML = body;
    conteudo.appendChild(styles);
  });

const div = document.createElement('div');

fetch('./sobre.html')
  .then((r) => r.text())
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    const h1 = document.querySelector('h1');
    h1.innerText = titulo.innerText;
  });

fetch('./imagem1.jpg')
  .then((r) => r.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    console.log(blobUrl);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
  });

CLONE;
fetch('https://viacep.com.br/ws/26379020/json/').then((r) => {
  const r2 = r.clone();

  r.text().then((text) => {
    console.log(text);
    conteudo.innerText = text;
  });
  r2.json().then((json) => {
    console.log(json);
  });
});

const imagem2 = fetch('https://viacep.com.br/ws/26379020/json/');

imagem2.then((response) => {
  console.log(response);
  response.headers.forEach(console.log);
});
