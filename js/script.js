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

  setInterval(function() {

    // active 상태의 slide-box item의 다음 인덱스
    let next_index = $(".js-banner__slide-box__indicator li.active").index()+1;

    switch(next_index) {
      case 1:
        $('.js-banner__slide-box__list').css('margin-left', '-740px');
        break;
      case 2:
        $('.js-banner__slide-box__list').css('margin-left', '-1480px');
        break;
      case 3:
        $('.js-banner__slide-box__list').css('margin-left', '-2220px');
        break;
      case 4:
        $('.js-banner__slide-box__list').css('margin-left', '0px');
        next_index = 0;
    }

    $(".js-banner__slide-box__indicator li").removeClass('active');
    $(".js-banner__slide-box__indicator li:nth-child("+(next_index+1)+")").addClass('active');
  }, 3000);

  // new book slide-box prev/next event

  $('.js-new-book__slide-box__prev').click(function() {

  });

  $('.js-new-book__slide-box__next').click(function() {
    
  });
});
