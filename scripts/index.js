import addNoteFeat from './addNote';
import {
  asideElem, asideRowElement, closeIcon, mainElement, menuIcon, searchContainer, searchIcon,
} from './elements';
import { Home, addNote, displayNote } from './generatedElements';

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

// asideRows.forEach((row) => {
//   row.addEventListener('click', (e) => {
//     const asideElement = e.currentTarget;
//     const active = document.querySelector('.aside__row--active');
//     if (active) {
//       active.classList.remove('aside__row--active');
//     }
//     asideElement.classList.add('aside__row--active');

//     if (asideElement.classList.contains('aside__first-row')) {
//       mainElement.innerHTML = Home;
//     } else if (asideElement.classList.contains('aside__second-row')) {
//       mainElement.innerHTML = addNote;
//       addNoteFeat();
//     }
//   });
// });

menuIcon.addEventListener('click', () => {
  asideElem.classList.toggle('aside--active');
});

closeIcon.addEventListener('click', () => {
  asideElem.classList.remove('aside--active');
});
