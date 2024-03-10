import { addNote, note } from './generatedElements';

const menuIcon = document.querySelector('.header__menu-icon');
const container = document.querySelector('.container');
const closeIcon = document.querySelector('.aside__close-icon');
const searchIcon = document.querySelector('.header__search-icon');
const searchContainer = document.querySelector('.header__search-container');
const noteElement = document.querySelector('.aside__first-row');
const addNoteElement = document.querySelector('.aside__second-row');
const mainElement = document.querySelector('.main');

addNoteElement.addEventListener('click', () => {

});

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('header__search-container--active');
});

const asideRows = document.querySelectorAll('.aside__row');

asideRows.forEach((row) => {
  row.addEventListener('click', (e) => {
    const asideElement = e.currentTarget;
    const active = document.querySelector('.aside__row--active');
    active.classList.remove('aside__row--active');
    asideElement.classList.add('aside__row--active');

    if (asideElement.classList.contains('aside__first-row')) {
      mainElement.innerHTML = note;
    } else if (asideElement.classList.contains('aside__second-row')) {
      mainElement.innerHTML = addNote;
    }
  });
});

menuIcon.addEventListener('click', () => {
  container.classList.toggle('container--moved');
});

closeIcon.addEventListener('click', () => {
  container.classList.remove('container--moved');
});
