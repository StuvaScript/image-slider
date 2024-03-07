export { positionImages, createNavDots, highlightNavDot };

//? **`` Loops thru all the images, takes the 'offsetImage' parameter number into consideration, measures the image's width, and lines the images up in a row.
function positionImages(offsetImage = 0) {
  const images = document.querySelectorAll('.image');

  images.forEach((img, index) => {
    img.style.left = (index + offsetImage * -1) * img.offsetWidth + 'px';
  });
}

//? **`` Finds all the images and for each image it creates a 'nav dot' , gives it a class and a data attribute, and appends it to the '#nav-dot' div element
function createNavDots() {
  const navDots = document.querySelector('#nav-dots');
  const images = document.querySelectorAll('.image');

  images.forEach(() => {
    const div = document.createElement('div');
    div.classList.add('dot');
    div.setAttribute('data-nav-dot', '');
    navDots.append(div);
  });
}

//? **`` Cycles thru the nav dots and changes the highlighted one based off of the 'offsetImage' number. The default highlighted nav dot is in the zeroth position
function highlightNavDot(offsetImage = 0) {
  const navDots = document.querySelectorAll('.dot');

  navDots.forEach((dot) => {
    dot.attributes['data-nav-dot'].value = '';
  });

  navDots[offsetImage].attributes['data-nav-dot'].value = 'active';
}
