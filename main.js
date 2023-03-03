'use strict';

// navbar beautiful & nav button state
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
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
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
    const opacityRatio = bottom / homeHeight;
    home.style.opacity = `${opacityRatio}`;
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

// work filtering & button state
const workBtnContainer = document.querySelector('.work__categories');
const workBtns = document.querySelectorAll('.category__btn');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (!filter) {
    return;
  }

  const selected = document.querySelector('.category__btn.active');
  selected.classList.remove('active');
  const target =
    event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  target.classList.add('active');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projectContainer.classList.remove('anim-out');
    projects.forEach((elem) => {
      if (filter === '*' || filter === elem.dataset.type) {
        elem.classList.remove('invisible');
      } else {
        elem.classList.add('invisible');
      }
    });
  }, 300);
});
