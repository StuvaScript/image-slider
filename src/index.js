import { positionImages } from './modules/dom-manipulation';
import { arrowLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

positionImages();
arrowLogic();

//* dom-manipulation.js - line: 4
//todo **`` Mess with the image offset. I'm trying to feed it the direction parameter of 'left-arrow' or 'right-arrow' and have the offset value change the index value of the images so they move around
