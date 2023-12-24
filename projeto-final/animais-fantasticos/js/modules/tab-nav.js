export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.tabMenu.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
    this.tabMenu[index].classList.add(this.activeClass);
  }

  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.addTabNavEvent();
      this.tabContent[0].classList.add(this.activeClass);
      this.tabMenu[0].classList.add(this.activeClass);
    }
    return this;
  }
}
