export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.addClass = 'ativo';

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação
  // ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    // console.log('teste')
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add(this.addClass);
      } else if (item.element.classList.contains(this.addClass)) {
        item.element.classList.remove(this.addClass);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event de Scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
