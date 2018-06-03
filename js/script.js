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
  }, function() {
    $('.js-category').removeClass('open');
  });

  $('.js-nav__hamburger-menu').click(function() {
    $('.js-category').removeClass('open');
  });

  $('.js-category').hover(function() {
    $('.js-category').addClass('open');
  }, function() {
    $('.js-category').removeClass('open');
  });

  $(".js-banner__slide-box__indicator li").click(function() {
    let index = $(this).index();

    $(".js-banner__slide-box__indicator li").removeClass('active');
    $(this).addClass('active');

    switch(index) {
      case 0:
        $('.js-banner__slide-box__list').css('margin-left', '0px');
        break;
      case 1:
        $('.js-banner__slide-box__list').css('margin-left', '-740px');
        break;
      case 2:
        $('.js-banner__slide-box__list').css('margin-left', '-1480px');
        break;
      case 3:
        $('.js-banner__slide-box__list').css('margin-left', '-2220px');
    }
  });
});
