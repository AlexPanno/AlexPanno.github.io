'use strict';
// Native JavaScript
let questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach((item) => {
  item.onclick = function () {
    let currentAnswer = this.parentElement.nextElementSibling;
    currentAnswer.classList.toggle("active-answer");
  }
});

// jQuery
$('.prices-slider').slick({
  slidesToShow: 3,
  infinite: false,
  centerMode: true,
  centerPadding: '0',
  initialSlide: 1,
})
