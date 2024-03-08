import { highlightNavDot, positionImages } from './dom-manipulation';

export { arrowLogic, navDotClickLogic };

//? **`` Adds or subtracts from the 'offsetImage' number and uses that number to change the position of the images.
function arrowLogic(offsetImage = 0) {
  const arrows = document.querySelectorAll('[data-arrow]');
  const imageCount = document.querySelectorAll('.image').length;

  [...arrows].map((arrow) => {
    arrow.addEventListener('click', () => {
      arrow.id == 'right-arrow' ? offsetImage++ : offsetImage--;

      //? **`` This allows the slider to loop if it reaches the end of the slide.
      if (offsetImage > imageCount - 1) {
        offsetImage = 0;
      }
      if (offsetImage < 0) {
        offsetImage = imageCount - 1;
      }

      highlightNavDot(offsetImage);
      positionImages(offsetImage);
    });
  });
}

//? **`` Add an event listener to all the nav dots, finds the index of the one clicked and passes that number into the two function that highlight the nav dots and move the images around.It finally calls the 'arrowLogic' function to reset the arrow offset number to the current index.
function navDotClickLogic() {
  [...document.querySelectorAll('[data-nav-dot]')].map((dot) => {
    dot.addEventListener('click', () => {
      const clickedNavDot = [...dot.parentNode.children].indexOf(dot);

      highlightNavDot(clickedNavDot);
      positionImages(clickedNavDot);
      arrowLogic(clickedNavDot);
    });
  });
}
