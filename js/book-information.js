$(document).ready(function() {

  // 이용후기/상품문의 입력하기 버튼 click 이벤트

  $('.js-book-information-detail2__add-review').click(function() {
    $('.js-book-information-detail2__review').toggle();
  });

  $('.js-book-information-detail3__add-qna').click(function() {
    $('.js-book-information-detail3__qna').toggle();
  })

  // 전체내용 버튼 click 이벤트

  $('.js-review-list__open').click(function() {
    var index = $(this).parent().parent().parent().index(); // .js-book-information__detail__review li의 인덱스 번호
    $('.js-review-list__item:nth-child('+(index+1)+') .js-review-list__summary').toggleClass('open');
    $('.js-review-list__item:nth-child('+(index+1)+') .js-review-list__detail-review').toggle();
  });

  $('.js-qna-list__open').click(function() {
    var index = $(this).parent().parent().parent().index(); // .js-book-information__detail__qna li의 인덱스 번호
    $('.js-qna-list__item:nth-child('+(index+1)+') .js-qna-list__summary').toggleClass('open');
    $('.js-qna-list__item:nth-child('+(index+1)+') .js-qna-list__whole-qna').toggle();
  });
});
