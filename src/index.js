import * as dom from './modules/dom-manipulation';
import * as event from './modules/event-handlers';
import './normalize.css';
import './style.css';

//! **`` The code below will be removed for the npm version of this project
//! ************************************************************************
import { displayArrows, displayImages } from './modules/dom-manipulation';
//! ************************************************************************

dom.displayFavicon();

dom.positionImages();
dom.createNavDots();
dom.highlightNavDot();

event.arrowLogic();
event.navDotClickLogic();

//! **`` The code below will be removed for the npm version of this project
displayArrows();
displayImages();
