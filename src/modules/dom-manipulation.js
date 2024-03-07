export { positionImages, createNavDots };

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

  images.forEach((image) => {
    const div = document.createElement('div');
    div.classList.add('dot');
    div.setAttribute('data-nav-dot', '');
    navDots.append(div);
  });
}
