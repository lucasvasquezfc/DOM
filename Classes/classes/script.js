// class Button {
//   constructor(options) {
//     this.options = options;
//   }
//   static createButton(text, background) {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     buttonElement.style.backgroundColor = background;
//     return buttonElement;
//   }
// }

// const blueButton = new Button({
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// });

// const blueButtonStatic = Button.createButton('Clique', 'blue');

// console.log(blueButtonStatic);

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.backgroundColor = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, 'blue', 'white');
  }
}

const botaoAzul = Button.blueButton('Comprar');
