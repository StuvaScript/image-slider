import {
  createNavDots,
  highlightNavDot,
  positionImages,
} from './modules/dom-manipulation';
import { arrowLogic, navDotClickLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

positionImages();
createNavDots();
highlightNavDot();

arrowLogic();
navDotClickLogic();

//! **`` NPX WEBPACK --WATCH duder!

//todo **`` Responsive design
