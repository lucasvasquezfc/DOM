// const promessa = new Promise(function (resolve, reject) {
//   let condicao = true;

//   if (condicao) {
//     setTimeout(function () {
//       resolve({ nome: 'Lucas', idade: 29 });
//     }, 2000);
//   } else {
//     reject(Error('Um erro ocorreu na promisse'));
//   }
// });

// const retorno = promessa
//   .then((resolucao) => {
//     resolucao.profissao = 'Designer';
//     return resolucao;
//   })
//   .then((resolucao) => console.log(resolucao))
//   .catch((rejeitada) => {
//     console.log(rejeitada);
//   })
//   .finally(() => {
//     console.log('Finalizou');
//   });

const login = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Usuário logado com sucesso');
  }, 1000);
});

const dados = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 500);
});

// const carregouTudo = Promise.all([login, dados]);

// carregouTudo.then((resolucao) => console.log(resolucao));

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => console.log(resolucao));
