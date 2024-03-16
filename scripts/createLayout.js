import {
  HomeSection,
  asideHomeSection, asideLandmarkLarge, asideLandmarkSmall, headerLandmarkSmall, mainLandmark,
} from './generatedElements';

export const containerElement = document.querySelector('.container');

export const createElementsSmallLayout = () => {
  containerElement.insertAdjacentHTML('beforeend', headerLandmarkSmall());
  containerElement.insertAdjacentHTML('beforeend', asideLandmarkSmall());
  containerElement.insertAdjacentHTML('beforeend', mainLandmark());
  document.querySelector('.main').innerHTML = HomeSection();
};

export const createElementsLargeLayout = () => {
  containerElement.insertAdjacentHTML('beforeend', asideLandmarkLarge());
  containerElement.insertAdjacentHTML('beforeend', asideHomeSection());
  containerElement.insertAdjacentHTML('beforeend', mainLandmark());
};
