import { containerElement, createElementsLargeLayout, createElementsSmallLayout } from './createLayout';
import { addAsideEvents, addAsideLargeEvents, addHeaderEvents } from './listeners';
import { initNoteList } from './note';

// Display the layout according to screen size
const handleScreenSizeChange = () => {
  containerElement.innerHTML = '';
  if (window.innerWidth >= 560) {
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

// Init the layout in first load
handleScreenSizeChange();

// Handling the layout according to change in screen size
// window.addEventListener('resize', () => {
//   handleScreenSizeChange();
// });
