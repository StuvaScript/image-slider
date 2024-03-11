import favicon from '../icons/alien.png';

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
