'use strict';

/*=================Native JavaScript=================*/

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

/*=================jQuery=================*/

// Prices slider on Slick JS

$('.prices-slider').slick({
  slidesToShow: 3,
  infinite: false,
  centerMode: true,
  centerPadding: '0',
  initialSlide: 1,
})

// Prices slider counter

// $('.prices-slider').on('afterChange', function (event, slick, currentSlide) {
//   $('.current-slide-number').text(currentSlide + 1);
// })

// Header scroll

$('.header-nav-link').on('click', function () {
  let sectionLink = $(this).attr('data-section');
  let section = $(sectionLink);
  let sectionCoords = section.offset().top;

  $('html, body').animate({
    scrollTop: sectionCoords
  }, 500);

  event.preventDefault();
})
