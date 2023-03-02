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

// nav menu click scroll
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (!link) {
    return;
  }
  scrollIntoView(link);
});

// contact me button
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  const element = document.querySelector(selector);
  element.scrollIntoView({
    behavior: 'smooth',
  });
}

// scroll , home transparent
// home height getboundingclientrect
// opacity => 0~100% =>
//bottom 받아와서 0에 가까워지면 0, height에 가까워지면 100 으로 한다.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  const bottom = home.getBoundingClientRect().bottom;
  if (bottom < 0) {
    return;
  }
  const ratio = (bottom / homeHeight) * 100;
  home.style.opacity = `${ratio}%`;
});
