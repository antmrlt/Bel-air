let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

let touchStartX = 0;
let touchEndX = 0;

document.getElementById('carousel').addEventListener('touchstart', handleTouchStart, false);
document.getElementById('carousel').addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    handleGesture();
}

function handleGesture() {
    const gestureThreshold = 50; // Adjust this value to control the sensitivity of the swipe

    if (touchEndX < touchStartX - gestureThreshold) {
        // Swiped left
        nextSlide();
    } else if (touchEndX > touchStartX + gestureThreshold) {
        // Swiped right
        prevSlide();
    }
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const newTranslateValue = -currentIndex * (100 + 10) + '%'; // 20 is the margin between slides
    carousel.style.transform = 'translateX(' + newTranslateValue + ')';
    updateButtonsVisibility();
}

function updateButtonsVisibility() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Hide or show the previous button based on the current index
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';

    // Hide or show the next button based on the current index
    nextButton.style.display = currentIndex === totalSlides - 1 ? 'none' : 'block';
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

// Initial update to set the initial visibility
updateButtonsVisibility();
