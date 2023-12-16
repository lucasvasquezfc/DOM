// fetch('./dados.json')
//   .then((r) => r.json())
//   .then((json) => {
//     console.log(json);
//     json.forEach((curso) => {
//       console.log(curso);
//     });
//   });

// async function puxarDados() {
//   const response = await fetch('./dados.json');
//   const dados = await response.json();
//   console.log(dados);
// }

// puxarDados();

async function puxarDados() {
  const response = fetch('./dados.json');
  const responseClientes = fetch('./clientes.json');

  const dados = await (await response).json();
  const dadosClientes = await (await responseClientes).json();
  console.log(dados);
  console.log(dadosClientes);
}

puxarDados();
