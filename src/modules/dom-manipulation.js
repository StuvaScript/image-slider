import favicon from '../icons/alien.png';

//! **`` The code below will be removed for the npm version of this project
//! ************************************************************************
import leftArrow from '../icons/left-arrow.png';
import rightArrow from '../icons/right-arrow.png';
import image1 from '../images/beach-birds.jpg';
import image2 from '../images/dawn-mountains.jpg';
import image3 from '../images/lake-sunset.jpg';
import image4 from '../images/red-poppies.jpg';
import image5 from '../images/sunrise-boat.jpg';

export { displayArrows, displayImages };
//! ************************************************************************

export { positionImages, createNavDots, highlightNavDot, displayFavicon };

//? **`` Loops thru all the images, takes the 'offsetImage' parameter number into consideration, measures the image's width, and lines the images up in a row.
function positionImages(offsetImage = 0) {
  [...document.querySelectorAll('.image')].map((img, index) => {
    img.style.left = (index + offsetImage * -1) * img.offsetWidth + 'px';
  });
}

//? **`` Finds all the images and for each image it creates a 'nav dot' , gives it a class and a data attribute, and appends it to the '#nav-dot' div element
function createNavDots() {
  const navDots = document.querySelector('#nav-dots');

  [...document.querySelectorAll('.image')].map(() => {
    const div = document.createElement('div');
    div.classList.add('dot');
    div.setAttribute('data-nav-dot', '');
    navDots.append(div);
  });
}

//? **`` Cycles thru the nav dots and changes the highlighted one based off of the 'offsetImage' number. The default highlighted nav dot is in the zeroth position
function highlightNavDot(offsetImage = 0) {
  const navDots = document.querySelectorAll('.dot');

  [...document.querySelectorAll('.dot')].map((dot) => {
    dot.attributes['data-nav-dot'].value = '';
  });

  navDots[offsetImage].attributes['data-nav-dot'].value = 'active';
}

//? **`` Displays the favicon
function displayFavicon() {
  document.querySelector('link[rel="icon"]').setAttribute('href', favicon);
}

//! **`` The code below will be removed for the npm version of this project
//? **`` Displays the arrow icons
function displayArrows() {
  document.querySelector('#left-arrow').setAttribute('src', leftArrow);
  document.querySelector('#right-arrow').setAttribute('src', rightArrow);
}

//? **`` Displays the arrow icons
function displayImages() {
  const images = document.querySelectorAll('.image');

  images[0].setAttribute('src', image1);
  images[1].setAttribute('src', image2);
  images[2].setAttribute('src', image3);
  images[3].setAttribute('src', image4);
  images[4].setAttribute('src', image5);
}
