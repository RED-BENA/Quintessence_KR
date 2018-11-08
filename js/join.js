$(document).ready(function() {
  var id = ""; // 아이디
  var nickname = ""; // 닉네임
  var password = ""; // 비밀번호
  var password_cfm = ""; // 비밀번호 확인
  var name = ""; // 이름
  var birthday = ""; // 생일
  var gender = ""; // 성별
  var phone_number = ""; // 전화번호
  var cellphone_number = ""; // 핸드폰 번호
  var email = ""; // 이메일
  var reception_sms = ""; // sms 수신여부
  var reception_email = ""; // 이메일 수신여부
  var zip_code = ""; // 우편번호 (5자리)
  var address = ""; // 주소 (도로명주소)
  var old_zip_code = ""; // (구) 우편번호 (6자리)
  var old_address = ""; // (구) 주소 (지번주소)

  // 회원가입 폼 submit 이벤트
  $('#join-page').submit(function(e) {
    id = $('.js-id').val();
    nickname = $('.js-nickname').val();
    password = $('.js-password').val();
    password_cfm = $('.js-password-cfm').val();
    name = $('.js-name').val();
    birthday = $('.js-birthday').val();
    gender = $('.js-gender');
    phone_number = $('.js-phone-number').val();
    cellphone_number = $('.js-cellphone-number').val();
    email = $('.js-email').val();
    reception_sms = $('.js-reception-sms');
    reception_email = $('.js-reception-email');
    zip_code = $('.js-zip-code').val();
    address = $('.js-address').val();
    old_zip_code = $('.js-old-zip-code').val();
    old_address = $('.js-old-address').val();

    // 성별 체크

    gender.each(function() {
      if ($(this).is(":checked")) {
        console.log($(this).val());
      }
    });

    // 전화번호 validate (만약에 입력했을 경우 정규표현식과 일치하는지)

    // 핸드폰 번호 validate (null 값인지, 정규표현식과 일치하는지)

    // sms 수신여부 (둘 다 null 값인지 체크)

    // 이메일 수신여부 (둘 다 null 값인지 체크)

    e.preventDefault();
  });

  // 아이디 중복 체크

  $('.js-check-id').click(function() {
    var isOverlap = false; // 아이디 중복여부
    id = $('.js-text-field--id').val(); // 아이디 입력값

    for (index in mock_data) {
      if (id == mock_data[index].id) {
        isOverlap = true;
        break;
      }
    }

    if (isOverlap) {
      $('.js-text-field--id').removeClass('input--success');
      $('.js-text-field--id').addClass('input--alert');
      $('.js-form-box__description--id .text--alert').show();
      $('.js-form-box__description--id .text--success').hide();

    } else {
      $('.js-text-field--id').addClass('input--success');
      $('.js-text-field--id').removeClass('input--alert');
      $('.js-form-box__description--id .text--alert').hide();
      $('.js-form-box__description--id .text--success').show();
    }
  });

  // 닉네임 중복체크

  $('.js-check-nickname').click(function() {
    var isOverlap = false; // 아이디 중복여부
    nickname = $('.js-text-field--nickname').val(); // 아이디 입력값

    for (index in mock_data) {
      if (nickname == mock_data[index].nickname) {
        isOverlap = true;
        break;
      }
    }

    if (isOverlap) {
      $('.js-text-field--nickname').removeClass('input--success');
      $('.js-text-field--nickname').addClass('input--alert');
      $('.js-row__description__nickname .text--alert').show();
      $('.js-row__description__nickname .text--success').hide();

    } else {
      $('.js-text-field--nickname').addClass('input--success');
      $('.js-text-field--nickname').removeClass('input--alert');
      $('.js-row__description__nickname .text--alert').hide();
      $('.js-row__description__nickname .text--success').show();
    }
  });

  // 비밀번호와 비밀번호 확인 체크

  $('.js-text-field--password, .js-text-field--password-cfm').keyup(function() {
    // 비밀번호와 비밀번호 확인 입력값
    password = $('.js-text-field--password').val();
    password_cfm = $('.js-text-field--password-cfm').val();

    $('.js-row__description__password-cfm .text--plain').hide(); // 기본문구 hide

    if (password != password_cfm) { // 아이디와 비밀번호가 일치하지 않을 때
      $(".js-text-field--password-cfm").addClass('input--alert'); // 비밀번호 확인 항목을 alert 상태로 변경
      $('.js-row__description__password-cfm .text--alert').show(); // 경고문 show
      $('.js-row__description__password-cfm .text--success').hide(); // 성공문 hide
    } else { // 아이디와 비밀번호가 일치할 때
      $(".js-text-field--password-cfm").removeClass('input--alert'); // 비밀번호 확인 항목 alert 상태 해제
      $('.js-row__description__password-cfm .text--alert').hide(); // 경고문 hide
      $('.js-row__description__password-cfm .text--success').show(); // 성공문 show
    }
  });


  // 주소찾기 (다음 우편번호 서비스 이용)
  $('.find-address').click(function() {

  });
});
