'use strict';

/*================= jQuery =================*/

$('.services-slider').slick({
  slidesToShow: 3,
  infinite: false,
  centerMode: true,
  centerPadding: '0',
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 1,
        centerPadding: '28%'
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        centerPadding: '22%'
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
})

/*================= Native JavaScript =================*/

// Question buttons on section "FAQ"

let questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach((item) => {
  item.onclick = function () {
    let currentAnswer = this.parentElement.nextElementSibling;
    currentAnswer.classList.toggle("active-answer");
    this.classList.toggle("active-question-button");
  }
});

// Touch menu button

let touchMenuButton = document.querySelector('.touch-menu');
let headerNavUl = document.querySelector('.nav-ul');

touchMenuButton.onclick = function () {
  headerNavUl.classList.toggle('active-nav-ul');
}
