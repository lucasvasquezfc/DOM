export default function fetchBitcoin(url, preco) {
  preco = document.querySelector(preco);

  fetch(url)
    .then((r) => r.json())
    .then((body) => {
      const reais = 100 / body.BRL.buy;

      preco.innerText = reais.toFixed(6);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

// const formatar = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });
// preco.innerText = formatar.format(reais);
