export { positionImages };

//? **`` Loops thru all the images, measures their width, and lines the images up in a row
function positionImages(direction) {
  const images = document.querySelectorAll('.image');
  let offset = 0;
  if (direction === 'right-arrow') {
    offset--;
    console.log(index);
  }
  console.log('offset');
  console.log(offset);

  images.forEach((img, index) => {
    console.log(index);

    img.style.left = index * img.offsetWidth + 'px';
  });
}
