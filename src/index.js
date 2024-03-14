import {
  createNavDots,
  displayFavicon,
  highlightNavDot,
  positionImages,
} from './modules/dom-manipulation';
import { arrowLogic, navDotClickLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

//! **`` The code below will be removed for the npm version of this project
//! ************************************************************************
import { displayArrows, displayImages } from './modules/dom-manipulation';
//! ************************************************************************

displayFavicon();

positionImages();
createNavDots();
highlightNavDot();

arrowLogic();
navDotClickLogic();

//! **`` The code below will be removed for the npm version of this project
displayArrows();
displayImages();
