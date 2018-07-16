$(document).ready(function() {

  // 이용후기/상품문의 입력하기 버튼 click 이벤트

  $('.js-book-information__detail__add-review').click(function() {
    $('.js-book-information__detail__review-container').toggle();
  });

  $('.js-book-information__detail__add-qna').click(function() {
    $('.js-book-information__detail__qna-container').toggle();
  })

  // 내용보기 버튼 click 이벤트

  $('.js-book-information__detail__review__open').click(function() {
    $('.js-book-information__detail__review__summary').toggleClass('open');
    $('.js-book-information__detail__review__whole-review').toggle();
  });

  $('.js-book-information__detail__qna__open').click(function() {
    $('.js-book-information__detail__qna__summary').toggleClass('open');
    $('.js-book-information__detail__qna__whole-qna').toggle();
  });
});
