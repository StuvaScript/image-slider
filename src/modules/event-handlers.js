import { positionImages } from './dom-manipulation';

export { arrowLogic };

function arrowLogic() {
  const arrows = document.querySelectorAll('[data-arrow]');

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      positionImages(arrow.id);
    });
  });
}
