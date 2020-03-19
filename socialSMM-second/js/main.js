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

  $('.tariff-link').on('click', function () {
    $(this).addClass('primary-color-text');
  });

  $('.tariff-link').magnificPopup({
    items: [
      {
        src: '#first-tariff-popup',
        type: 'inline',
      },
      {
        src: '#second-tariff-popup',
        type: 'inline',
      },
      {
        src: '#third-tariff-popup',
        type: 'inline',
      }
    ],

    fixedContentPos: true,

    index: number,
  });



  $('.open-form-button').on('click', function () {
    $('.tariff-popup-form').removeClass('disabled-tariff-popup-form');
    $('.open-form-button').addClass('disabled-button');
  });

  $('.tariff-popup .mfp-close').on('click', function () {
    $('.tariff-popup-form').addClass('disabled-tariff-popup-form');
    $('.open-form-button').removeClass('disabled-button');
  })

});
