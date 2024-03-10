(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=`<section class="section Add-Note">
<h2 class="Add-Note__title">Add Note</h2>
<div class="Add-Note__add-notes">
  <label class="Add-Note__input-label" for="input-title">Title*</label>
  <input class="Add-Note__input-title" id="input-title" type="text" />
</div>
<div class="Add-Note__add-notes">
  <label class="Add-Note__input-label" for="input-author"
    >Author*</label
  >
  <input
    class="Add-Note__input-author"
    id="input-author"
    type="text"
  />
</div>
<div class="Add-Note__add-notes">
  <label class="Add-Note__input-label" for="input-note"
    >Your Note*</label
  >
  <textarea class="Add-Note__input-note" id="input-title"></textarea>
</div>
<div class="Add-Note__add-buttons">
  <button class="Add-Note__add-button">Add Note</button
  ><button class="Add-Note__add-button">Add Pinned Note</button>
</div>
</section>
`,l=`<section class="section Home">
<div class="Home__pinned">
  <h2 class="Home__mark Home__pinned-mark">PINNED</h2>
  <article class="article pinned">
    <h3 class="article__title">
      Business Partners Work at Modern Office
    </h3>
    <p class="article__paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
      arcu dui.
    </p>
    <div class="article__meta-info">
      <span class="article__date">Feb 8, 2021</span>
      <button class="article__delete">Delete</button>
    </div>
  </article>
</div>

<div class="Home__notes">
  <h2 class="Home__mark Home__notes-mark">Notes</h2>
  <article class="article note">
    <h3 class="article__title">
      Business Partners Work at Modern Office
    </h3>
    <p class="article__paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
      arcu dui.
    </p>
    <div class="article__meta-info">
      <span class="article__date">Feb 8, 2021</span>
      <button class="article__delete">Delete</button>
    </div>
  </article>
</div>
</section>`,u=document.querySelector(".header__menu-icon"),r=document.querySelector(".container"),_=document.querySelector(".aside__close-icon"),m=document.querySelector(".header__search-icon"),p=document.querySelector(".header__search-container");document.querySelector(".aside__first-row");const f=document.querySelector(".aside__second-row"),n=document.querySelector(".main");f.addEventListener("click",()=>{});m.addEventListener("click",()=>{p.classList.toggle("header__search-container--active")});const h=document.querySelectorAll(".aside__row");h.forEach(a=>{a.addEventListener("click",s=>{const o=s.currentTarget;document.querySelector(".aside__row--active").classList.remove("aside__row--active"),o.classList.add("aside__row--active"),o.classList.contains("aside__first-row")?n.innerHTML=l:o.classList.contains("aside__second-row")&&(n.innerHTML=d)})});u.addEventListener("click",()=>{r.classList.toggle("container--moved")});_.addEventListener("click",()=>{r.classList.remove("container--moved")});
