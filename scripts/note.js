/* eslint-disable import/no-cycle */
import moment from 'moment';
import { mainElement, searchBarElement } from './elements';
import { addEventsToNotes } from './listeners';
import { HomeSection } from './generatedElements';

const saveToDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const fetchData = (key) => JSON.parse(localStorage.getItem(key));

const noteList = fetchData('notes') || [];

const createNotesFromList = (notes) => {
  let allNotes = '';
  let pinnedNotes = '';
  notes.forEach((note, index) => {
    if (note.pinned) {
      pinnedNotes += `<li data-position =${index} class="Home__list-item">
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
    allNotes += `<li data-position =${index} class="Home__list-item ${
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

  addEventsToNotes(notes);
};

export const initNotes = () => {
  createNotesFromList(noteList);
};

const getDataFromUser = (e) => {
  const title = document.querySelector('.Add-Note__input-title').value;
  const author = document.querySelector('.Add-Note__input-author').value;

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

export default function handleAddNote() {
  const formElement = document.querySelector('.Add-Note__form');
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteObj = getDataFromUser(e);
    noteList.push(noteObj);
    saveToDB('notes', noteList);
    // This clear all inputs values inside the form
    formElement.reset();
  });
}

export const deleteNote = (position) => {
  noteList.splice(position, 1);
  saveToDB('notes', noteList);
  createNotesFromList(noteList);
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

  mainElement.innerHTML = noteContent;
};

const searchFeature = () => {
  searchBarElement.addEventListener('input', () => {
    const searchValue = searchBarElement.value.trim().toLowerCase();

    let searchList = [];
    searchList = searchValue
      ? noteList.filter((note) => note.title.toLowerCase().includes(searchValue)) : noteList;

    if (!document.querySelector('.Home__list')) {
      mainElement.innerHTML = HomeSection();
      if (!searchList.length) document.querySelector('.Home').textContent = 'No results';
    }

    createNotesFromList(searchList);
  });
};

searchFeature();
