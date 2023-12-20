import ValidarCPF from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const validarCPF = new ValidarCPF(cpf).iniciar();

const validadorCPF = new ValidarCPF();

console.log(validadorCPF.formatar('111 111 111 33'));

console.log(validarCPF);
