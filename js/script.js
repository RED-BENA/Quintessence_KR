$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= ($('.top').height() + $('.header').height())) {
      $('.nav').addClass('over');
    } else {
      $('.nav').removeClass('over');
    }
  });

  $('.js-nav__hamburger-menu').hover(function() {
    $('.js-category').addClass('open');
  });

  $('.js-nav__hamburger-menu').click(function() {
    $('.js-category').removeClass('open');
  });

  $('.js-category').hover(function() {
    $('.js-category').addClass('open');
  }, function() {
    $('.js-category').removeClass('open');
  });
});
