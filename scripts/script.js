$(function () {
  $('.drop_down_title').click(function () {
    $(this).siblings('.drop_down_body').slideToggle();
  });

  $('.drop_down_item').click(function () {
    $(this).parent().siblings('.drop_down_title').children('.text').text($(this).text());
    $(this).parent().slideUp();
  });

  $('.burger').click(function () {
    $('.menu').toggleClass('_active');
    $('body').toggleClass('_lock');
  });
});
