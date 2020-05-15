'use strict';
// Native JavaScript
let questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach((item) => {
  item.onclick = function () {
    let currentAnswer = this.parentElement.nextElementSibling;
    currentAnswer.classList.toggle("active-answer");
  }
});

let headerLinks = document.querySelectorAll('.header-nav-item');
let sections = document.querySelectorAll('section');

headerLinks.forEach((item, index) => {
  item.onclick = function () {
    if (index === 0) {
      alert('This is main')
    } else {
      event.preventDefault();
      Array.from(sections)[index];
    }
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

$('.prices-slider').on('afterChange', function (event, slick, currentSlide) {
  $('.current-slide-number').text(currentSlide + 1);
})
