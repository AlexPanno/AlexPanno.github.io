$(document).ready(function () {

  $(document).click(function(e){
    const {target} = e;
    if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });

  let element = $('.stage');
  let counter = 0;

  $('.touch-menu').on('click', function () {
    if (!($('.hidden-section').hasClass('active-hidden-section'))) {
      $('.top-header .row-wrapper, .header-banner').addClass('disabled-opacity');
      $('.hidden-section').addClass('active-hidden-section').fadeIn();
    } else {
      $('.top-header .row-wrapper, .header-banner').removeClass('disabled-opacity');
      $('.hidden-section').removeClass('active-hidden-section').fadeOut();
    }
  });

  $('.cases-slider').slick({
    dots: true,
    fade: true,
    draggable: false,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          draggable: true,
        }
      }
    ]
  });

  $('.clients-slider').slick({
    slidesToShow: 5,
    arrows: false,

    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  })

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

  let curentIndex = 0;

  $('.tariff-link').on('click', function () {
    if ($(this).parent().siblings('.tariff-popup').hasClass('first-tariff-popup')) {
      curentIndex = 0;
    } else if ($(this).parent().siblings('.tariff-popup').hasClass('second-tariff-popup')) {
      curentIndex = 1;
    } else {
      curentIndex = 2;
    }
  });

  $('.tariff-link').magnificPopup({
    items: [
      {
        src: '.first-tariff-popup',
        type: 'inline',
      },
      {
        src: '.second-tariff-popup',
        type: 'inline',
      },
      {
        src: '.third-tariff-popup',
        type: 'inline',
      }
    ],

    fixedContentPos: true,
    index: 0,
  });

  $('.open-form-button').on('click', function () {
    $('.tariff-popup-form').removeClass('disabled-tariff-popup-form');
    $('.open-form-button').addClass('disabled-button');
  });

  $('.tariff-popup .mfp-close').on('click', function () {
    $('.tariff-popup-form').addClass('disabled-tariff-popup-form');
    $('.open-form-button').removeClass('disabled-button');
  });

});
