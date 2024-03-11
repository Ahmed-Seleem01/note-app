import moment from 'moment';

const noteList = [];

const getDataFromUser = (e) => {
  const title = document.querySelector('.Add-Note__input-title');
  const author = document.querySelector('.Add-Note__input-author');
  const noteContent = document.querySelector('.Add-Note__input-note');
  const date = moment().format('MMM D, YYYY');
  const pinned = e.submitter.classList.contains('Add-Note__add-button--pinned') || false;
  const noteObj = {
    title: title.value,
    author: author.value,
    noteContent: noteContent.value,
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
    // This clear all inputs values inside the form
    formElement.reset();
  });
}

const createNotesFromList = (notes) => {
  let allNotes = '';
  let pinnedNotes = '';
  notes.forEach((note, index) => {
    if (note.pinned) {
      pinnedNotes += `<li class="Home__list-item">
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
    allNotes += `<li data-position =${index} class="Home__list-item ${note.pinned ? 'Home__list-item--pinned' : ''} ">
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

export const initNotes = () => {
  createNotesFromList(noteList);
};

export const deleteNote = (position) => {
  console.log(position);
  noteList.splice(position, 1);
  createNotesFromList(noteList);
};
