/* eslint-disable import/no-cycle */
import {
  asideElem,
  mainElement,
} from './elements';
import { HomeSection, addNoteSection } from './generatedElements';
import handleAddNote, {
  deleteNote, displayNoteSection, initHome, searchFeature,
} from './note';

export const addHeaderEvents = () => {
  const searchIcon = document.querySelector('.header__search-icon');
  const searchContainer = document.querySelector('.header__search-container');

  searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('header__search-container--active');
  });

  const menuIcon = document.querySelector('.header__menu-icon');
  menuIcon.addEventListener('click', () => {
    asideElem.classList.toggle('aside--active');
  });

  const searchInputElement = document.querySelector('.header__input-box');
  searchInputElement.addEventListener('input', searchFeature);
};

export const addAsideEvents = () => {
  const closeIcon = document.querySelector('.aside__close-icon');
  const asideRows = document.querySelectorAll('.aside__row');

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
        initHome();
      } else if (asideElement.classList.contains('aside__second-row')) {
        mainElement.innerHTML = addNoteSection();
        handleAddNote();
      }
    });
  });
};

export const addHomeEvents = (arr) => {
  const notes = document.querySelectorAll('.Home__list-item');
  const asideRowElement = document.querySelector('.aside__row');

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
