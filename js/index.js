$(document).ready(function() {


  /* Banner */


  // indicator를 누르면 해당 이미지로 이동하는 event
  $(".js-bannerIndicator__item").click(function(e) {
    e.preventDefault();

    // 클릭한 Indicator의 인덱스를 저장한다.
    let index = $(this).index();

    // 모든 Indicator의 active 클래스를 제거한 후 클릭한 Indicator에 active 클래스를 추가한다.
    $(".js-bannerIndicator__item").removeClass('active');
    $(this).addClass('active');

    // margin-left를 사용하여 이미지 슬라이드를 이동시킨다.
    switch(index) {
      case 0:
        $('.js-bannerSlide-box__list').css('margin-left', '0px');
        break;
      case 1:
        $('.js-bannerSlide-box__list').css('margin-left', '-740px');
        break;
      case 2:
        $('.js-bannerSlide-box__list').css('margin-left', '-1480px');
        break;
      case 3:
        $('.js-bannerSlide-box__list').css('margin-left', '-2220px');
    }
  });

  // banner automatically (자동화)
  setInterval(function() {

    // active 상태의 slide-box item의 다음 인덱스
    // (index는 0부터, nth-child는 1부터 계산하기 때문에 index에 먼저 1을 더해준다.)
    let next_index = $(".js-bannerIndicator__item.active").index()+1;

    // margin-left를 사용하여 이미지 슬라이드를 이동시킨다.
    switch(next_index) {
      case 1:
        $('.js-bannerSlide-box__list').css('margin-left', '-740px');
        break;
      case 2:
        $('.js-bannerSlide-box__list').css('margin-left', '-1480px');
        break;
      case 3:
        $('.js-bannerSlide-box__list').css('margin-left', '-2220px');
        break;
      case 4:
        $('.js-bannerSlide-box__list').css('margin-left', '0px');
        next_index = 0; // 첫 번째 슬라이드로 돌아가기 위해 0으로 reset
    }

    // Indicator의 모든 요소의 active 클래스를 제거한 후 현재 활성화된 요소에 active 클래스를 추가한다.
    $(".js-bannerIndicator__item").removeClass('active');
    $(".js-bannerIndicator__item:nth-child("+(next_index+1)+")").addClass('active');
  }, 3000);


  /* New Book Slide-box */


  // new book slide-box의 prev 버튼을 클릭했을 때
  $('.js-new-book__slide-box__prev').click(function(e) {
    e.preventDefault();

    // new book slide-box에 보여지는 도서 중에서 첫 번째 도서의 index
    // (index는 0부터, nth-child는 1부터 계산하기 때문에 index에 먼저 1을 더해준다.)
    let first_index = $('.js-new-book__slide-box__list li.first').index()+1;

    // first_index가 전체 도서 중 첫 번째 도서의 index일 경우
    if (first_index == 1) {
      first_index = 8; // 두 번째 보여지는 도서(7 ~ 12)의 첫 번째 인덱스(7)로 세팅
    }

    // 전체 도서의 first 클래스 remove
    // 현재 first_index의 이전 도서(first_index - 1)에 first 클래스 add
    $('.js-slide-box__list li').removeClass('first');
    $('.js-slide-box__list li:nth-child('+(first_index - 1)+')').addClass('first');

    // 현재 first_index에서 왼쪽으로 한 칸(first_index - 1) 이동
    // + -1 ((현재 인덱스 - 1) * -156 만큼 margin-left를 설정해야함) -> -2
    $('.js-slide-box__list').css('margin-left', ((first_index - 2) * -156)+'px');

  });

  // new book slide-box의 next 버튼을 클릭했을 때
  $('.js-slide-box__next').click(function(e) {
    e.preventDefault();

    // new book slide-box에 보여지는 도서 중에서 첫 번째 도서의 index
    // (index는 0부터, nth-child는 1부터 계산하기 때문에 index에 먼저 1을 더해준다.)
    let first_index = $('.js-slide-box__list li.first').index()+1;

    // first_index가 전체 도서 중 마지막 도서의 index일 경우
    if (first_index == 7) {
      first_index = 1; // 첫 번째 보여지는 도서(1 ~ 6)의 첫 번째 인덱스(1)로 세팅
    }

    // 전체 도서의 first 클래스 remove
    // 현재 first_index의 다음 도서(first_index + 1)에 first 클래스 add
    $('.js-slide-box__list li').removeClass('first');
    $('.js-slide-box__list li:nth-child('+(first_index + 1)+')').addClass('first');

    // 현재 first_index에서 오른쪽으로 한 칸(first_index + 1) 이동
    // + -1 ((현재 인덱스 - 1) * -156 만큼 margin-left를 설정해야함) -> 0
    $('.js-slide-box__list').css('margin-left', (first_index * -156)+'px');
  });
});
