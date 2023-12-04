let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const newTranslateValue = -currentIndex * (100 + 10) + '%'; // 20 is the margin between slides
    carousel.style.transform = 'translateX(' + newTranslateValue + ')';
}

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateCarousel();
}
