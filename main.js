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
  navbarMenu.classList.remove('open');
});

// navbar menu toggle
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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
    block: 'start',
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
    // 애니메이션 이후에 바꿔주기 위함.
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

// scrollspy

// 스크롤스파이.
// .section 다 가져와서별로 el.pageY와

const sections = document.querySelectorAll('.section');
console.log(sections);
document.addEventListener('scroll', () => {
  // const elemTop = sections.offsetTop;
  // const elemBottom = about.offsetBttom;
  // const scrollY = window.scrollY;

  sections.forEach((elem) => {
    const checkpoint = elem.offsetHeight / 4;
    if (window.scrollY + (window.innerHeight * 2) / 3 > elem.offsetTop) {
      console.log(elem);
    }
  });
});
