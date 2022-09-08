// debounce fn forces a function to wait a certain amount of time before running again
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// select all the images we'll work here

const sliderImages = document.querySelectorAll('.slide-in');

// create a function that will run every time the user scrolls;

function checkSlide(e){
  sliderImages.forEach(sliderImage => {
    // deciding whether the image is on page or not;
  const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // half way through the image

  // bottom of the image;
  const imageBottom = sliderImage.offsetTop + sliderImage.height;
  const isHalfShown = slideInAt > sliderImage.offsetTop;
  const isNotScrolledPast = window.scrollY < imageBottom;
  isHalfShown && isNotScrolledPast ? sliderImage.classList.add('active') : sliderImage.classList.remove('active');

  });
}

window.addEventListener('scroll', debounce(checkSlide)); // debounce fn will only run checkSlide fn once very 20 milliseconds!!
