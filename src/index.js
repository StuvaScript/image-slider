import { createNavDots, positionImages } from './modules/dom-manipulation';
import { arrowLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

positionImages();
arrowLogic();
createNavDots();

//! **`` NPX WEBPACK --WATCH duder!

//todo **`` Mess with nav dots. Make them dynamically created based on how many images there are. Link the current lit up dot to the 'active' classed image. Make the 'active' class move with the visible image.
