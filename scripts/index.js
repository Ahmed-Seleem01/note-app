const menuIcon = document.querySelector('.header__menu-icon');
const container = document.querySelector('.container');
const closeIcon = document.querySelector('.aside__close-icon');
const searchIcon = document.querySelector('.header__search-icon');
const searchContainer = document.querySelector('.header__search-container');

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('header__search-container--active');
});

const asideRows = document.querySelectorAll('.aside__row');

asideRows.forEach((row) => {
  row.addEventListener('click', (e) => {
    const active = document.querySelector('.aside__row--active');
    active.classList.remove('aside__row--active');
    e.currentTarget.classList.add('aside__row--active');
  });
});

menuIcon.addEventListener('click', () => {
  container.classList.toggle('container--moved');
});

closeIcon.addEventListener('click', () => {
  container.classList.remove('container--moved');
});
