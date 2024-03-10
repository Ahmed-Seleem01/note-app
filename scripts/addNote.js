import moment from 'moment';
import { Home, addNote, createNotesFromList } from './generatedElements';
import { mainElement } from './elements';

const noteList = [];

export default function addNoteFeat() {
  const formElement = document.querySelector('.Add-Note__form');

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('.Add-Note__input-title').value;
    const author = document.querySelector('.Add-Note__input-author').value;
    const noteContent = document.querySelector('.Add-Note__input-note').value;
    const date = moment().format('MMM D, YYYY');
    const pinned = e.submitter.classList.contains('Add-Note__add-button--pinned') || false;
    const noteObj = {
      title,
      author,
      noteContent,
      date,
      pinned,
    };

    noteList.push(noteObj);
    // createNotesFromList(noteList);
    console.log(noteList);
  });
}

const asideRows = document.querySelectorAll('.aside__row');
asideRows.forEach((row) => {
  row.addEventListener('click', (e) => {
    const asideElement = e.currentTarget;
    const active = document.querySelector('.aside__row--active');
    if (active) {
      active.classList.remove('aside__row--active');
    }
    asideElement.classList.add('aside__row--active');

    if (asideElement.classList.contains('aside__first-row')) {
      mainElement.innerHTML = Home;
      if (noteList.length) createNotesFromList(noteList);
    } else if (asideElement.classList.contains('aside__second-row')) {
      mainElement.innerHTML = addNote;
      addNoteFeat();
    }
  });
});
