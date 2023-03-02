'use strict';

// navbar beautiful
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// scroll into view
// 클릭되면 해당 아이템으로 scroll into view
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (!link) {
    return;
  }
  console.log(link);
  const element = document.querySelector(`${link}`);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
