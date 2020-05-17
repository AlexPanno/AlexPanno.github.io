'use strict';
// Native JavaScript

let questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach((item) => {
  item.onclick = function () {
    let currentAnswer = this.parentElement.nextElementSibling;
    currentAnswer.classList.toggle("active-answer");
    this.classList.toggle("active-question-button");
  }
});

let headerLinks = document.querySelectorAll('.header-nav-item');
let sections = document.querySelectorAll('section');

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

headerLinks.forEach((item, index) => {
  item.onclick = function () {
    let currentSection = Array.from(sections)[index];
    let currentSectionCoords = getCoords(currentSection);

    window.scrollTo(0, currentSectionCoords.top);
    event.preventDefault();
  }
});


// jQuery Slick JS
$('.prices-slider').slick({
  slidesToShow: 3,
  infinite: false,
  centerMode: true,
  centerPadding: '0',
  initialSlide: 1,
})

$('.prices-slider').on('afterChange', function (event, slick, currentSlide) {
  $('.current-slide-number').text(currentSlide + 1);
})
