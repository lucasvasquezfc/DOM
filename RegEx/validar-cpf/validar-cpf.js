export default class ValidarCPF {
  constructor(element) {
    this.element = element;
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, '');
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  formatar(cpf) {
    return this.construir(this.limpar(cpf));
  }

  validar(cpf) {
    const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return matchCPF && matchCPF[0] === cpf;
  }

  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add('valido');
      cpfElement.classList.remove('erro');
    } else {
      cpfElement.classList.add('erro');
      cpfElement.classList.remove('valido');
    }
  }

  adicionarEvento() {
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element);
    });
  }
  iniciar() {
    this.adicionarEvento();
    return this;
  }
}
