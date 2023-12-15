const conteudoEndereco = document.querySelector('.endereco .conteudo');
const conteudoBlockchain = document.querySelector('.blockchain .conteudo');
const conteudoJoke = document.querySelector('.joke .conteudo');
const btnSearch = document.querySelector('.btn.search-cep');
const btnJoke = document.querySelector('.btn.next-joke');
const cep = document.querySelector('#cep');

function handleSearch(event) {
  event.preventDefault();
  if (cep.value) {
    const urlCep = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(urlCep)
      .then((r) => r.json())
      .then((address) => {
        conteudoEndereco.innerText = `${address.logradouro},
         ${address.bairro},
         ${address.localidade} - ${address.uf},
         ${address.complemento}`;
      });
  }
}

fetchBtc();
setInterval(function () {
  fetchBtc();
  console.log('atualizou');
}, 1000 * 30);

function fetchBtc() {
  let blockChain = 'https://www.blockchain.com/pt/ticker';

  fetch(blockChain)
    .then((r) => r.json())
    .then((body) => {
      let reais = +body.BRL.buy;
      const formatar = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      conteudoBlockchain.innerText = formatar.format(reais);
    });
}

function handleJoke() {
  const chuckJoke = 'https://api.chucknorris.io/jokes/random';

  fetch(chuckJoke)
    .then((r) => r.json())
    .then((body) => {
      conteudoJoke.innerText = body.value;
    });
}

btnSearch.addEventListener('click', handleSearch);
btnJoke.addEventListener('click', handleJoke);
