export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = 'ativo';

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove(activeClass);
    });
    tabMenu.forEach((item) => {
      item.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
    tabMenu[index].classList.add(activeClass);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);
    tabMenu[0].classList.add(activeClass);

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
