export default function initFetchBitcoin() {}
const preco = document.querySelector('.btc-preco');

function fetchBtc(url) {
  fetch(url)
    .then((r) => r.json())
    .then((body) => {
      let reais = 100 / body.BRL.buy;
      const formatar = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      //   preco.innerText = formatar.format(reais);
      preco.innerText = reais.toFixed(6);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

fetchBtc('https://www.blockchain.com/pt/ticker');
