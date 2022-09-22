"use strict";

const slides = document.querySelectorAll(".slide");
const prevSlide = document.querySelector(".btn-prev");
const nextSlide = document.querySelector(".btn-next");


// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});


let curSlide = 0;
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    // move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    // move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});
