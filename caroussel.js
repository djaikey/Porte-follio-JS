const caroussel = document.querySelector("#caroussel"); 
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button"); // Vous avez une faute de frappe, remplacez "nexr-button" par "next-button"
const numItems = carouselItems.length;
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = carouselItems[0].offsetWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + numItems) % numItems;
    updateCarousel();
});
nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % numItems;
    updateCarousel();
});

    