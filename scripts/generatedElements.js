export const HomeSection = () => `<section class="section Home">
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

export const addNoteSection = () => `<section class="section Add-Note">
  <h2 class="Add-Note__title">Add Note</h2>
  <form class="Add-Note__form">
  <div class="Add-Note__add-notes">
   <label class="Add-Note__input-label" for="input-title">Title*</label>
   <input class="Add-Note__input-title" id="input-title" type="text" required />
  </div>
  <div class="Add-Note__add-notes">
   <label class="Add-Note__input-label" for="input-author"
     >Author*</label>
   <input class="Add-Note__input-author" id="input-author" type="text" required />
  </div>
  <div class="Add-Note__add-notes">
   <label class="Add-Note__input-label" for="input-note">Your Note*</label>
   <textarea class="Add-Note__input-note" id="input-note" required></textarea>
  </div>
  <div class="Add-Note__add-buttons">
   <button type="submit" class="Add-Note__add-button">Add Note</button
   ><button type="submit" class="Add-Note__add-button Add-Note__add-button--pinned">Add Pinned Note</button>
  </div>
  </form>
  </section>
  `;
