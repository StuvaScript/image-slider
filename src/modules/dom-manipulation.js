export { positionImages };

//? **`` Loops thru all the images, takes the 'offsetImage' parameter number into consideration, measures the image's width, and lines the images up in a row.
function positionImages(offsetImage = 0) {
  const images = document.querySelectorAll('.image');

  images.forEach((img, index) => {
    img.style.left = (index + offsetImage * -1) * img.offsetWidth + 'px';
  });
}
