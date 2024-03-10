import { addNote, displayNote, note } from './generatedElements';

const menuIcon = document.querySelector('.header__menu-icon');
const asideElem = document.querySelector('.aside');
const closeIcon = document.querySelector('.aside__close-icon');
const searchIcon = document.querySelector('.header__search-icon');
const searchContainer = document.querySelector('.header__search-container');
const mainElement = document.querySelector('.main');
const articleElements = document.querySelectorAll('.article');
const asideRowElement = document.querySelector('.aside__row');

mainElement.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('article')
   || e.target.classList.contains('article')) {
    mainElement.innerHTML = displayNote();
    asideRowElement.classList.remove('aside__row--active');
  }
});
// articleElements.forEach((articleElement) => {
//   articleElement.addEventListener('click', () => {
//     mainElement.innerHTML = displayNote();
//   });
// });

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('header__search-container--active');
});

const asideRows = document.querySelectorAll('.aside__row');

asideRows.forEach((row) => {
  row.addEventListener('click', (e) => {
    const asideElement = e.currentTarget;
    const active = document.querySelector('.aside__row--active');
    if (active) {
      active.classList.remove('aside__row--active');
    }
    asideElement.classList.add('aside__row--active');

    if (asideElement.classList.contains('aside__first-row')) {
      mainElement.innerHTML = note;
    } else if (asideElement.classList.contains('aside__second-row')) {
      mainElement.innerHTML = addNote;
    }
  });
});

menuIcon.addEventListener('click', () => {
  asideElem.classList.toggle('aside--active');
});

closeIcon.addEventListener('click', () => {
  asideElem.classList.remove('aside--active');
});
