import { highlightNavDot, positionImages } from './dom-manipulation';

export { arrowLogic };

//? **`` Adds or subtracts from the 'offsetImage' number and uses that number to change the position of the images.
function arrowLogic() {
  const arrows = document.querySelectorAll('[data-arrow]');
  const imageCount = document.querySelectorAll('.image').length;
  let offsetImage = 0;

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      arrow.id == 'right-arrow' ? offsetImage++ : offsetImage--;

      //? **`` This allows the slider to loop if it reaches the end of the slide.
      if (offsetImage > imageCount - 1) {
        offsetImage = 0;
      }
      if (offsetImage < 0) {
        offsetImage = imageCount - 1;
      }
      console.log(offsetImage);

      highlightNavDot(offsetImage);

      positionImages(offsetImage);
    });
  });
}
