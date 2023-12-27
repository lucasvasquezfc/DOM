export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.5;
    this.addClass = 'ativo';

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSencionVisible = sectionTop - this.windowMetade < 0;
      if (isSencionVisible) {
        section.classList.add(this.addClass);
      } else if (section.classList.contains(this.addClass)) {
        section.classList.remove(this.addClass);
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
    // if (this.sections.length) {
    // }
  }
}
