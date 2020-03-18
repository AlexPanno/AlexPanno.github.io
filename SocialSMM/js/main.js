$(document).ready(function () {

  $('.our-cases-slider').slick({
    dots: true,
  });

  $('.touch-menu').on('click',function () {
    if (!($('.hidden-header-section').hasClass('active-hidden-section'))) {
      $('.hidden-header-section').addClass('active-hidden-section').fadeIn();
      $('.top-header .logo, .top-header .header-nav, .header-button').addClass('fadeOut');
      $('.header-banner').addClass('fadeOut');
      $('header').addClass('hidden-header');

    } else {
      $('.hidden-header-section').removeClass('active-hidden-section').fadeOut();
      $('.top-header .logo, .top-header .header-nav, .header-button').removeClass('fadeOut');
      $('.header-banner').removeClass('fadeOut');
      $('header').removeClass('hidden-header');
    }
  });
});
