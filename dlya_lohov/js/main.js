'use strict';

let questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach((item) => {
  item.onclick = function () {
    let currentAnswer = this.parentElement.nextElementSibling;
    currentAnswer.classList.toggle("active-answer");
  }
});
