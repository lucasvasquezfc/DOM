import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.addClass = 'active';

    // define touchstart e click como argumento padrão de events caso o usuário não defina
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.addClass);
    this.menuButton.classList.add(this.addClass);

    setTimeout(() => {
      outsideClick(this.menuList, this.events, () => {
        this.menuList.classList.remove(this.addClass);
        this.menuButton.classList.remove(this.addClass);
      });
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });

    this.menuButton.addEventListener('click', this.openMenu);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
