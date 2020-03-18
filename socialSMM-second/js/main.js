$(document).ready(function () {

  $(document).click(function(e){
    const {target} = e;
    if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });

  $('.cases-slider').slick({
    dots: true,
    fade: true,
  });

  $('.tariff .button').on('click',function () {
    if (!($('.tariff').hasClass('first-rotate-y-animation'))) {
      $('.tariff').addClass('first-rotate-y-animation');
      $('.tariff').removeClass('second-rotate-y-animation');
    } else {
      $('.tariff').removeClass('first-rotate-y-animation');
      $('.tariff').addClass('second-rotate-y-animation');
    }
  });

});
