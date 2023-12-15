const conteudoEndereco = document.querySelector('.endereco .conteudo');
const conteudoBlockchain = document.querySelector('.blockchain .conteudo');
const conteudoJoke = document.querySelector('.joke .conteudo');
const btnSearch = document.querySelector('.btn.search-cep');
const btnJoke = document.querySelector('.btn.next-joke');
const cep = document.querySelector('#cep');

function fetchCep() {
  if (cep.value) {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
      .then((r) => r.json())
      .then((address) => {
        conteudoEndereco.innerText = `${address.logradouro},
         ${address.bairro},
         ${address.localidade} - ${address.uf},
         ${address.complemento}`;
      });
  }
}

// setInterval(fetchBtc, 1000 * 30);
function fetchBtc() {
  fetch('https://www.blockchain.com/pt/ticker')
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

function fetchJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((r) => r.json())
    .then((body) => {
      conteudoJoke.innerText = body.value;
    });
}

function handleClickBusca(event) {
  event.preventDefault();
  fetchCep();
}

btnSearch.addEventListener('click', handleClickBusca);
btnJoke.addEventListener('click', fetchJoke);
fetchBtc();
fetchJoke();
