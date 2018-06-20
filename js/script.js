$(document).ready(function() {


  /* 일정량만큼 스크롤을 했을 때 Nav와 최근 본 상품 fixed 상태로 변경 */


  $(window).scroll(function() {
    if ($(this).scrollTop() >= ($('.top').height() + $('.header').height())) {
      $('.nav').addClass('over');
      $('.js-recent-book').addClass('over');
    } else {
      $('.nav').removeClass('over');
      $('.js-recent-book').removeClass('over');
    }
  });


  /* 카테고리 open / close */ 


  $('.js-nav__hamburger-menu').hover(function() {
    $('.js-category').addClass('open');
  }, function() {
    $('.js-category').removeClass('open');
  });

  $('.js-nav__hamburger-menu').click(function() {
    $('.js-nav__hamburger-menu').addClass('active');
    $('.js-category').removeClass('open');
  });

  $('.js-category').hover(function() {
    $('.js-nav__hamburger-menu').addClass('active');
    $(this).addClass('open');
  }, function() {
    $('.js-nav__hamburger-menu').removeClass('active');
    $(this).removeClass('open');
  });
});
