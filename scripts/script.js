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

  $('.services_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.slider_prev'),
    nextArrow: $('.slider_next')
  });

  $('.services_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider_count span').text(currentSlide + 1);
  });

  $('.slider_main_body').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    arrows: true,
    prevArrow: $('.slider_main_prev'),
    nextArrow: $('.slider_main_next')
  });

  $('.slider_main_body').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider_counter').removeClass().addClass('slider_counter');
    $('.slider_counter').addClass(`_${currentSlide + 1}`);
  });

  $('.slider_gal_bod').slick({
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.slider_gal_prev'),
    nextArrow: $('.slider_gal_next'),
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]
  });

  $('.vac_title>.arrow').click(function () {
    $(this).parent().siblings('.vac_body').slideToggle();
    $(this).parent().toggleClass('_active');
  });
});
