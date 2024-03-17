/* eslint-disable import/no-cycle */
import { HomeSection, addNoteSection } from './generatedElements';
import handleAddNote, {
  deleteNote, displayNoteSection, initNoteList, searchFeature,
} from './note';

const addSearchEvents = () => {
  const searchInputElement = document.querySelector('.header__input-box');
  searchInputElement.addEventListener('input', searchFeature);
};

const handleAsideRows = (row) => {
  // Add The event to the button
  const mainElement = document.querySelector('.main');
  const asideHomeElement = document.querySelector('.aside-home');

  row.parentElement.addEventListener('click', () => {
    const asideElement = row;
    const active = document.querySelector('.aside__row--active');
    if (active) {
      active.classList.remove('aside__row--active');
    }
    asideElement.classList.add('aside__row--active');

    if (asideElement.classList.contains('aside__first-row')) {
      if (asideHomeElement) {
        asideHomeElement.classList.add('aside-home--active');
      } else {
        mainElement.innerHTML = HomeSection();
        initNoteList();
      }
    } else if (asideElement.classList.contains('aside__second-row')) {
      if (asideHomeElement) asideHomeElement.classList.remove('aside-home--active');
      mainElement.innerHTML = addNoteSection();
      handleAddNote();
    }
  });
};

export const addHeaderEvents = () => {
  const searchIcon = document.querySelector('.header__search-icon');
  const searchContainer = document.querySelector('.header__search-container');
  const asideElem2 = document.querySelector('.aside');

  searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('header__search-container--active');
  });

  const menuIcon = document.querySelector('.header__menu-icon');
  menuIcon.addEventListener('click', () => {
    asideElem2.classList.toggle('aside--active');
  });

  addSearchEvents();
};

export const addAsideEvents = () => {
  const closeIcon = document.querySelector('.aside__close-icon');
  const asideElem = document.querySelector('.aside');
  const asideRows = document.querySelectorAll('.aside__row');

  closeIcon.addEventListener('click', () => {
    asideElem.classList.remove('aside--active');
  });

  asideRows.forEach((row) => handleAsideRows(row));
};

export const addAsideLargeEvents = () => {
  const asideRows = document.querySelectorAll('.aside__row');
  addSearchEvents();
  asideRows.forEach((row) => handleAsideRows(row));
};

export const addHomeEvents = (arr) => {
  const notes = document.querySelectorAll('.Home__list-item');
  const asideRowElement = document.querySelector('.aside__row');

  const noteHandler = (e, note) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const { position } = note.dataset;
      if (e.target.classList.contains('article__delete')) {
        if (position) deleteNote(position);
        return;
      }

      displayNoteSection(position, arr);
      asideRowElement.classList.remove('aside__row--active');
    }
  };

  notes.forEach((note) => {
    note.addEventListener('click', (e) => noteHandler(e, note));
    note.addEventListener('keydown', (e) => noteHandler(e, note));
  });

  const dragElement = document.querySelector('.aside-home-drag');
  if (dragElement) {
    dragElement.addEventListener('click', () => {
      const asideRowActive = document.querySelector('.aside__row--active');
      const asideHomeElement = document.querySelector('.aside-home');
      asideHomeElement.classList.remove('aside-home--active');
      if (asideRowActive) asideRowActive.classList.remove('aside__row--active');
    });
  }
};
