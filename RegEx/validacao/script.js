// const regexpCEP = /\d{5}[\s-]?\d{3}/g;

// const ceps = ['00000-000', '00000 000', '00000000'];

// for (cep of ceps) {
//   console.log(cep, cep.match(regexpCEP));
// }

// const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

// const cpfs = [
//   '000.000.000-00',
//   '000-000-000-00',
//   '000.000.000.00',
//   '000000000-00',
//   '00000000000',
// ];

// for (cpf of cpfs) {
//   console.log(cpf, cpf.match(regexpCPF));
// }

// const meuRegexpCNPJ = /\d{2}[-./\s]?(?:\d{3}[-./\s]?){2}\d{4}[-./\s]?\d{2}/g;

// const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

// const cnpjs = [
//   '00.000.000/0000-00',
//   '00000000000000',
//   '00-000-000-0000-00',
//   '00.000.000/000000',
//   '00.000.000.000000',
//   '00 000 000 0000 00',
//   '00.000.000.0000.00',
// ];

// for (cnpj of cnpjs) {
//   console.log(cnpj, cnpj.match(meuRegexpCNPJ));
// }

// const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
// const meuRegexpTELEFONE =
//   /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}/g;

// const telefones = [
//   '+55 11 98888-8888',
//   '+55 11 98888 8888',
//   '+55 11 988888888',
//   '+44 11988888888',
//   '+5511988888888',
//   '5511988888888',
//   '11 98888-8888',
//   '11 98888 8888',
//   '(11) 98888 8888',
//   '(11) 98888-8888',
//   '11-98888-8888',
//   '11 98888 8888',
//   '11988888888',
//   '11988888888',
//   '988888888',
//   '(11)988888888',
//   '98888 8888',
//   '8888 8888',
// ];

// for (telefone of telefones) {
//   console.log(telefone, telefone.match(regexpTELEFONE));
// }

// const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

// const emails = [
//   'email@email.com',
//   'email@email.com.org',
//   'email-email@email.com',
//   'email_email@email.com',
//   'email.email23@email.com.br',
//   'email.email23@empresa-sua.com.br',
//   'c@contato.cc',
// ];

// for(email of emails) {
//   console.log(email, email.match(regexpEMAIL));
// }

// const regexp = /\w+/gi;

// const regexp1 = new RegExp('\\d+', 'gi');

// const regexp = /Java/g;

// const frase = 'JavaScript e Java linguagem 101, Java';

// let i = 1;
// while (regexp.test(frase)) {
//   console.log(i++, regexp.lastIndex);
// }

// const regexp = /\w{2,}/g;
// const frase = 'JavaScript, TypeScript e CoffeeScript';

// console.log(regexp.exec(frase));
// // ["JavaScript", index: 0, input: "JavaScript,
// // TypeScript e CoffeeScript", groups: undefined]
// regexp.exec(frase);
// // ["TypeScript", index: 12, input: "JavaScript,
// // TypeScript e CoffeeScript", groups: undefined]
// regexp.exec(frase);
// // ["CoffeeScript", index: 25, input: "JavaScript,
// // TypeScript e CoffeeScript", groups: undefined]
// regexp.exec(frase);
// // null
// regexp.exec(frase); // Reinicia
// // ["JavaScript", index: 0, input: "JavaScript,
// // TypeScript e CoffeeScript", groups: undefined]

const frase = 'JavaScript, TypeScript, CoffeeScript';

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp = /(?<=<\/?)\w+/g;

const resultado = tags.replace(regexp, 'a');
console.log(resultado);
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>
