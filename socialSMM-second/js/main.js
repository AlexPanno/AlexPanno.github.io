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

  $('.tariff-front .button, .tariff-close-button').on('click',function () {
    if (!($(this).parent().hasClass('rotate-close'))) {
      if ($(this).parent().hasClass('rotate-open')) {
        $(this).parent().removeClass('rotate-open');
        $(this).parent().siblings().removeClass('rotate-close');
      } else {
        $(this).parent().addClass('rotate-close');
        $(this).parent().siblings().addClass('rotate-open');
      }
    }
  });

});
