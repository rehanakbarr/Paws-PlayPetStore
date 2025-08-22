// document.addEventListener('DOMContentLoaded', () => {

//     /* ========================
//        MOBILE NAVIGATION TOGGLE
//     ========================= */
//     const hamburger = document.querySelector('.hamburger-menu');
//     const navMenu = document.querySelector('.navbar');

//     // Toggle the navigation menu on hamburger click
//     hamburger.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });

//     // Close the navigation menu when a link is clicked
//     document.querySelectorAll('.navbar a').forEach(link => {
//         link.addEventListener('click', () => {
//             if (navMenu.classList.contains('active')) {
//                 navMenu.classList.remove('active');
//             }
//         });
//     });

//     /* ========================
//        TESTIMONIAL CAROUSEL
//     ========================= */
//     const carouselContainer = document.querySelector('.carousel-container');
//     const prevButton = document.querySelector('.prev-button');
//     const nextButton = document.querySelector('.next-button');
    
//     // Get all testimonial slides
//     const slides = document.querySelectorAll('.testimonial-slide');
//     let currentIndex = 0;

//     /**
//      * Updates the carousel to show the current slide.
//      * It uses CSS transform to move the container.
//      */
//     function updateCarousel() {
//         // Calculate the translation value based on the current index
//         const translateValue = -currentIndex * 100 + '%';
//         carouselContainer.style.transform = `translateX(${translateValue})`;
//     }

//     /**
//      * Moves to the next slide.
//      * Wraps around to the beginning if at the end.
//      */
//     nextButton.addEventListener('click', () => {
//         // Increment index, but wrap around if it goes past the last slide
//         currentIndex = (currentIndex + 1) % slides.length;
//         updateCarousel();
//     });

//     /**
//      * Moves to the previous slide.
//      * Wraps around to the end if at the beginning.
//      */
//     prevButton.addEventListener('click', () => {
//         // Decrement index, but wrap around to the end if it goes past the first slide
//         currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//         updateCarousel();
//     });

//     // Initial setup to display the first slide
//     updateCarousel();

// });