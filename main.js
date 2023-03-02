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

// scroll , home & arrowup transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  const bottom = home.getBoundingClientRect().bottom;
  if (bottom < 0) {
    return;
  } else {
    const ratio = (bottom / homeHeight) * 100;
    home.style.opacity = `${ratio}%`;
  }
});

// Arrow up button
const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});
