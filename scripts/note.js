/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import moment from 'moment';
import {
  addHomeEvents as addNotesEvents,
} from './listeners';

const saveToDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const fetchData = (key) => JSON.parse(localStorage.getItem(key));

const noteList = fetchData('notes') || [];

const createNotesFromList = (notes = noteList) => {
  let allNotes = '';
  let pinnedNotes = '';
  notes.forEach((note, index) => {
    if (note.pinned) {
      pinnedNotes += `<li tabindex=0 data-position =${index} class="Home__list-item">
        <article class="article note">
          <h3 class="article__title">
            ${note.title}
          </h3>
          <p class="article__paragraph">
          ${note.noteContent}
          </p>
          <div class="article__meta-info">
            <span class="article__date">${note.date}</span>
            <button class="article__delete">Delete</button>
          </div>
        </article>
      </li>
      `;
    }
    allNotes += `<li tabindex=0 data-position =${index} class="Home__list-item ${
      note.pinned ? 'Home__list-item--pinned' : ''
    } ">
      <article class="article note">
        <h3 class="article__title">
          ${note.title}
        </h3>
        <p class="article__paragraph">
        ${note.noteContent}
        </p>
        <div class="article__meta-info">
          <span class="article__date">${note.date}</span>
          <button class="article__delete">Delete</button>
        </div>
      </article>
    </li>
     `;
  });

  document.querySelector('.Home__notes-list').innerHTML = allNotes || '';
  document.querySelector('.Home__pinned-notes-list').innerHTML = pinnedNotes || '';
};

const getDataFromUser = (e) => {
  const title = document.querySelector('.Add-Note__input-title').value;
  const author = document.querySelector('.Add-Note__input-author').value;

  // This line help in getting the input in paragraphs instead of getting one big text
  const noteContent = document
    .querySelector('.Add-Note__input-note')
    .value.trim().split(/\n/g);

  const date = moment().format('MMM D, YYYY');
  const pinned = e.submitter.classList.contains('Add-Note__add-button--pinned') || false;
  const noteObj = {
    title,
    author,
    noteContent,
    date,
    pinned,
  };

  return noteObj;
};

// This function create notes from the stored array and add events to these notes
export const initNoteList = (notes = noteList) => {
  createNotesFromList(notes);
  addNotesEvents(notes);
};

export default function handleAddNote() {
  const formElement = document.querySelector('.Add-Note__form');
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteObj = getDataFromUser(e);
    noteList.push(noteObj);
    saveToDB('notes', noteList);
    if (document.querySelector('.aside-home')) initNoteList();
    // This clear all inputs values inside the form
    formElement.reset();
  });
}

export const deleteNote = (position) => {
  const result = confirm('Do you want to delete this note?');
  if (result) {
    noteList.splice(position, 1);
    saveToDB('notes', noteList);
    initNoteList();
  }
};

export const displayNoteSection = (position, arr) => {
  const note = arr[position];

  const noteContent = ` <section class="section Note">
    <div class="Note__main-info">
      <h2 class="Note__title">
        ${note.title}
      </h2>
      <div class="Note__info">
        <span class="Note__date">${note.date}</span> /
        <span class="Note__author">${note.author}</span>
      </div>
    </div>
    <div class="Note__content">
      ${note.noteContent.map((item) => `<p>${item.trim()}</p>`).join('')}
    </div>
  
    <button class='Note__add-note' ></button>
  </section>
  `;

  document.querySelector('.main').innerHTML = noteContent;
};

export const searchFeature = () => {
  const searchInputElement = document.querySelector('.header__input-box');
  const searchValue = searchInputElement.value.trim().toLowerCase();

  if (!searchValue) {
    initNoteList();
  }

  let searchList = [];
  searchList = searchValue
    ? noteList.filter((note) => note.title.toLowerCase().includes(searchValue)) : noteList;

  if (searchList.length) {
    initNoteList(searchList);
  } else {
    document.querySelector('.Home__notes-list').textContent = 'No results';
    document.querySelector('.Home__pinned-notes-list').textContent = 'No results';
  }
};
