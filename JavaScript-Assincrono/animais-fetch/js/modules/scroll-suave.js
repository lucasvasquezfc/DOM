export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(e) {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    const section = document.querySelector(target);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // // forma alternativa
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
