$(document).ready(function() {

  // 회원가입 폼 submit 이벤트
  $('#join-page').submit(function(e) {
    var id = $('.js-id').val(); // 아이디
    var nickname = $('.js-nickname').val(); // 닉네임
    var password = $('.js-password').val(); // 비밀번호
    var password_cfm = $('.js-password-cfm').val(); // 비밀번호 확인
    var name = $('.js-name').val(); // 이름
    var birthday = $('.js-birthday').val(); // 생일
    var gender = $('.js-gender'); // 성별
    var phone_number = $('.js-phone-number').val(); // 전화번호
    var cellphone_number = $('.js-cellphone-number').val(); // 핸드폰 번호
    var email = $('.js-email').val(); // 이메일
    var reception_sms = $('.js-reception-sms'); // sms 수신여부
    var reception_email = $('.js-reception-email'); // 이메일 수신여부
    var zip_code = $('.js-zip-code').val(); // 우편번호 (5자리)
    var address = $('.js-address').val(); // 주소 (도로명주소)
    var old_zip_code = $('.js-old-zip-code').val(); // (구) 우편번호 (6자리)
    var old_address = $('.js-old-address').val(); // (구) 주소 (지번주소)

    // 비밀번호 == 비밀번호 확인 체크
    if (password != password_cfm) {
      return;
    }

    // 성별 체크

    gender.each(function() {
      if ($(this).is(":checked")) {
        console.log($(this).val());
      }
    });

    // console.log(gender);

    // 전화번호 validate (만약에 입력했을 경우 정규표현식과 일치하는지)

    // 핸드폰 번호 validate (null 값인지, 정규표현식과 일치하는지)

    // sms 수신여부 (둘 다 null 값인지 체크)

    // 이메일 수신여부 (둘 다 null 값인지 체크)

    e.preventDefault();
  });


  // 아이디 중복체크
  $('.check-id').click(function() {

  });


  // 닉네임 중복체크
  $('.check-id').click(function() {

  });


  // 주소찾기 (다음 우편번호 서비스 이용)
  $('.find-address').click(function() {

  });
});
