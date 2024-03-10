import { notesSection, pinnedNotesSection } from './elements';

export const addNote = `<section class="section Add-Note">
<h2 class="Add-Note__title">Add Note</h2>
<form class="Add-Note__form">
<div class="Add-Note__add-notes">
  <label class="Add-Note__input-label" for="input-title">Title*</label>
  <input class="Add-Note__input-title" id="input-title" type="text" required/>
</div>
<div class="Add-Note__add-notes">
  <label class="Add-Note__input-label" for="input-author"
    >Author*</label
  >
  <input
    class="Add-Note__input-author"
    id="input-author"
    type="text"
    required
  />
</div>
<div class="Add-Note__add-notes">
  <label class="Add-Note__input-label" for="input-note"
    >Your Note*</label
  >
  <textarea class="Add-Note__input-note" id="input-title" required></textarea>
</div>
<div class="Add-Note__add-buttons">
  <button type="submit" class="Add-Note__add-button">Add Note</button
  ><button type="submit" class="Add-Note__add-button Add-Note__add-button--pinned">Add Pinned Note</button>
</div>
</form>
</section>
`;

export const Home = `<section class="section Home">
<div class="Home__pinned">
  <h2 class="Home__mark Home__pinned-mark">PINNED</h2>
  <ul class="Home__list Home__pinned-notes-list"></ul>
</div>

<div class="Home__notes">
  <h2 class="Home__mark Home__notes-mark">Notes</h2>
  <ul class="Home__list Home__notes-list"></ul>
</div>
</section>
  `;

export const createNotesFromList = (noteList) => {
  let notes = '';
  let pinnedNotes = '';
  noteList.forEach((note) => {
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
    notes += `<li class="Home__list-item ${note.pinned ? 'Home__list-item--pinned' : ''} ">
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

  document.querySelector('.Home__notes-list').innerHTML = notes || '';
  document.querySelector('.Home__pinned-notes-list').innerHTML = pinnedNotes || '';
};

export const displayNote = () => {
  const noteContent = ` <section class="section Note">
  <div class="Note__main-info">
    <h2 class="Note__title">
      ABusiness Partners Work at Modern Office
    </h2>
    <div class="Note__info">
      <span class="Note__date">Feb 8, 2021</span> /
      <span class="Note__author">By Yousef</span>
    </div>
  </div>
  <div class="Note__content">
    <p class="Note__paragraph">
      Ipsam dolorem necessitatibus officia accusamus illum? Voluptas,
      cum vero eius ex placeat fuga quasi sint mollitia voluptatem
      deleniti pariatur iusto autem sapiente a culpa optio iste dolorum
      exercitationem rerum consectetur!
    </p>
    <p class="Note__paragraph">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      quam, minima neque sed voluptatem aspernatur ab tenetur optio
      assumenda ipsam dolore rerum provident tempora, rem laboriosam,
      nemo itaque explicabo corrupti?
    </p>
    <p class="Note__paragraph">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      quam, minima neque sed voluptatem aspernatur ab tenetur optio
      assumenda ipsam dolore rerum provident tempora, rem laboriosam,
      nemo itaque explicabo corrupti?
    </p>
  </div>

  <button class='Note__add-note' ></button>
</section>
`;

  return noteContent;
};
