let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
}

function plusSlides(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  showSlides();
}

// Initially show the first slide
showSlides();
