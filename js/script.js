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

  // indicator를 누르면 해당 이미지로 이동하는 event
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

  // banner automatically (자동화)
  setInterval(function() {

    // active 상태의 slide-box item의 다음 인덱스
    // (index는 0부터, nth-child는 1부터 계산하기 때문에 index에 먼저 1을 더해준다.)
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

  // new book slide-box의 prev 버튼을 클릭했을 때
  $('.js-new-book__slide-box__prev').click(function() {

    // new book slide-box에 보여지는 도서 중에서 첫 번째 도서의 index
    // (index는 0부터, nth-child는 1부터 계산하기 때문에 index에 먼저 1을 더해준다.)
    let first_index = $('.js-new-book__slide-box__list li.first').index()+1;

    // first_index가 전체 도서 중 첫 번째 도서의 index일 경우
    if (first_index == 1) {
      first_index = 7; // 두 번째 보여지는 도서(7 ~ 12)의 첫 번째 인덱스(7)로 세팅
    }

    // 전체 도서의 first 클래스 remove
    // 현재 first_index의 이전 도서(first_index - 1)에 first 클래스 add
    $('.js-new-book__slide-box__list li').removeClass('first');
    $('.js-new-book__slide-box__list li:nth-child('+(first_index - 1)+')').addClass('first');

    // 현재 first_index에서 왼쪽으로 한 칸(first_index - 1) 이동
    $('.js-new-book__slide-box__list').css('margin-left', ((first_index - 1) * -156)+'px');

  });

  // new book slide-box의 next 버튼을 클릭했을 때
  $('.js-new-book__slide-box__next').click(function() {

    // new book slide-box에 보여지는 도서 중에서 첫 번째 도서의 index
    // (index는 0부터, nth-child는 1부터 계산하기 때문에 index에 먼저 1을 더해준다.)
    let first_index = $('.js-new-book__slide-box__list li.first').index()+1;

    // first_index가 전체 도서 중 마지막 도서의 index일 경우
    if (first_index == 12) {
      first_index = 1; // 첫 번째 보여지는 도서(1 ~ 6)의 첫 번째 인덱스(1)로 세팅
    }

    // 전체 도서의 first 클래스 remove
    // 현재 first_index의 다음 도서(first_index + 1)에 first 클래스 add
    $('.js-new-book__slide-box__list li').removeClass('first');
    $('.js-new-book__slide-box__list li:nth-child('+(first_index + 1)+')').addClass('first');

    // 현재 first_index에서 오른쪽으로 한 칸(first_index + 1) 이동
    $('.js-new-book__slide-box__list').css('margin-left', ((first_index + 1) * -156)+'px');
  });
});
