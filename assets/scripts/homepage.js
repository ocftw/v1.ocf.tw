$(function(){

  $('.slick').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear'
  });

});

//test

$('.slick').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,    // 手機只顯示一張
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false    // 可依需要手機隱藏箭頭
      }
    }
  ]
});
