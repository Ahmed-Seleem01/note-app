import {
  asideElem, asideRowElement, closeIcon, mainElement, menuIcon, searchContainer, searchIcon,
  asideRows,
} from './elements';
import { displayNoteSection, HomeSection, addNoteSection } from './generatedElements';
import handleAddNote, { deleteNote, initNotes } from './note';

mainElement.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('article')
   || e.target.classList.contains('article')) {
    mainElement.innerHTML = displayNoteSection();
    asideRowElement.classList.remove('aside__row--active');
  }

  if (e.target.classList.contains('article__delete')) {
    const liElm = e.target.parentElement.parentElement.parentElement;
    const { position } = liElm.dataset;
    if (position) deleteNote(position);
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

menuIcon.addEventListener('click', () => {
  asideElem.classList.toggle('aside--active');
});

closeIcon.addEventListener('click', () => {
  asideElem.classList.remove('aside--active');
});

asideRows.forEach((row) => {
  row.addEventListener('click', (e) => {
    const asideElement = e.currentTarget;
    const active = document.querySelector('.aside__row--active');
    if (active) {
      active.classList.remove('aside__row--active');
    }
    asideElement.classList.add('aside__row--active');

    if (asideElement.classList.contains('aside__first-row')) {
      mainElement.innerHTML = HomeSection();
      initNotes();
    } else if (asideElement.classList.contains('aside__second-row')) {
      mainElement.innerHTML = addNoteSection();
      handleAddNote();
    }
  });
});
