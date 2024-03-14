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

export const headerLandmarkSmall = () => `<header class="header">
        <div class="header__main">
          <div class="header__menu-icon">
            <div class="header__menu-bar"></div>
            <div class="header__menu-bar"></div>
            <div class="header__menu-bar"></div>
          </div>
          <h1 class="header__title">Almdrasa-Notes</h1>
          <img
            src="./images/search-icon.svg"
            alt="search-icon"
            class="header__search-icon"
          />
        </div>
        <div class="header__search-container">
          <input
            class="header__input-box"
            type="text"
            name="search-note"
            placeholder="Search"
          />
        </div>
      </header>
`;

export const asideLandmarkSmall = () => `<div class="aside__close-icon">
<div class="aside__close-bar"></div>
<div class="aside__close-bar"></div>
</div>
<div class="aside__row aside__first-row aside__row--active">
<div class="aside__mark-box aside__mark-box"></div>
<h2 class="aside__title">Notes</h2>
</div>
<div class="aside__row aside__second-row">
<div class="aside__mark-box"></div>
<h2 class="aside__title">Add Notes</h2>
</div>`;
