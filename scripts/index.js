const menuIcon = document.querySelector('.header__menu-icon');
const container = document.querySelector('.container');
const closeIcon = document.querySelector('.aside__close-icon');

const asideRows = document.querySelectorAll('.aside__row');

asideRows.forEach((row) => {
  row.addEventListener('click', (e) => {
    const active = document.querySelector('.aside__mark-box--active');
    active.classList.remove('aside__mark-box--active');
    e.currentTarget.querySelector('.aside__mark-box').classList.add('aside__mark-box--active');
  });
});

menuIcon.addEventListener('click', () => {
  container.classList.toggle('container--moved');
});

closeIcon.addEventListener('click', () => {
  container.classList.remove('container--moved');
});
