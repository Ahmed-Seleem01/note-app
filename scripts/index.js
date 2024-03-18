import { containerElement, createElementsLargeLayout, createElementsSmallLayout } from './createLayout';
import { addAsideEvents, addAsideLargeEvents, addHeaderEvents } from './listeners';
import { initNoteList } from './note';

// Display the layout according to screen size
const handleScreenSizeChange = (e) => {
  containerElement.innerHTML = '';
  if (e.matches) {
    createElementsLargeLayout();
    addAsideLargeEvents();
    initNoteList();
  } else {
    createElementsSmallLayout();
    addHeaderEvents();
    addAsideEvents();
    initNoteList();
  }
};

// Create media query object
const mediaQuery = window.matchMedia('(min-width: 768px)');

// Init the layout in first load
handleScreenSizeChange(mediaQuery);

// Handle the change in mediaquery
mediaQuery.addEventListener('change', handleScreenSizeChange);
