import { highlightNavDot, positionImages } from './dom-manipulation';

export { arrowLogic, navDotClickLogic };

//? **`` Adds or subtracts from the 'offsetImage' number and uses that number to change the position of the images.
function arrowLogic() {
  const arrows = document.querySelectorAll('[data-arrow]');
  const imageCount = document.querySelectorAll('.image').length;
  let offsetImage = 0;

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

//? **`` Add an event listener to all the nav dots, finds the index of the one clicked and passes that number into the two function that highlight the nav dots and move the images around.
function navDotClickLogic() {
  [...document.querySelectorAll('[data-nav-dot]')].map((dot) => {
    dot.addEventListener('click', () => {
      const clickedNavDot = [...dot.parentNode.children].indexOf(dot);

      highlightNavDot(clickedNavDot);
      positionImages(clickedNavDot);
    });
  });
}
