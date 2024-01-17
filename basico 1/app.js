const circulo = document.querySelector('.circulo');

const seguirMouse = (event) => {
  circulo.style.left = event.x + 'px';
  circulo.style.top = event.y + 'px';
};

window.addEventListener('mousemove', seguirMouse);
