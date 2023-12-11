let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    let newTranslateValue;

    if (window.innerWidth < 800) {
        newTranslateValue = -currentIndex * (100 + 5) + '%';
    } else {
        newTranslateValue = -currentIndex * (100 + 10) + '%';
    }

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
