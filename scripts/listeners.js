/* eslint-disable import/no-cycle */
import {
  asideElem,
  asideRowElement,
  closeIcon,
  menuIcon,
  searchContainer,
  searchIcon,
  asideRows,
  mainElement,
} from './elements';
import { HomeSection, addNoteSection } from './generatedElements';
import handleAddNote, { deleteNote, displayNoteSection, initNotes } from './note';

export const addEventsToNotes = (arr) => {
  const notes = document.querySelectorAll('.Home__list-item');
  notes.forEach((note) => {
    note.addEventListener('click', (e) => {
      const { position } = note.dataset;
      if (e.target.classList.contains('article__delete')) {
        if (position) deleteNote(position);
        return;
      }

      displayNoteSection(position, arr);
      asideRowElement.classList.remove('aside__row--active');
    });
  });
};

export const initEventListeners = () => {
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
};
