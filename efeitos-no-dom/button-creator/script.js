const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChanges);

function handleChanges(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle(name, value);
  saveValues(name, value);
  showCss();
}

function handleStyle(name, value) {
  btn.style[name] = value;
  if (
    name == 'height' ||
    name == 'width' ||
    name == 'borderRadius' ||
    name == 'boder'
  ) {
    btn.style[name] = value + 'px';
  }

  if (name == 'fontSize') {
    btn.style[name] = value + 'rem';
  }

  if (name == 'texto') {
    btn.innerText = value;
  }
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle(propertie, localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });

  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML =
    '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}
