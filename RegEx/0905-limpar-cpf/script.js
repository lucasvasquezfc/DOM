const cpfsList = document.querySelectorAll('.cpf li');

const regexp = /(?:\d{3}[\s.-]?){3}[\s.-]?\d{2}/gi;

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatarCPF = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
};

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPF(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

substituirCPFS(cpfsList);
