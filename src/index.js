import {
  createNavDots,
  displayFavicon,
  highlightNavDot,
  positionImages,
} from './modules/dom-manipulation';
import { arrowLogic, navDotClickLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

displayFavicon();

positionImages();
createNavDots();
highlightNavDot();

arrowLogic();
navDotClickLogic();
