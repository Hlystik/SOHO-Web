$(function () {
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    $("nav").css({
      "background-color": "rgba(255, 255, 255, " + (scroll / 250) + ") ",
      "box-shadow": "0 2px 6px rgba(187, 187, 187, " + (scroll / 150) + ")"
    });
  });
  /* $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    $("nav").css({
      "background-color": "rgba(255, 255, 255, " + Math.min(0.9, (scroll / 250) ) + ") ",
      //"box-shadow": "0 2px 6px rgba(187, 187, 187, " + (scroll / 150) + ")"
    });
  }); */
  $('.info__slider').slick({
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    //autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg"></button>',
  });


  $('.media__slider').slick({
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    //autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.webinar__slider').slick({
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    //autoplay: true,
    arrows: false,
  });
  //hamburger
  $('.navbar__burger-icon').on('click', function () {
    $('.navbar__menu').toggleClass('navbar__menu_active');
  });
  //scroll
  $("a[href*='#']").on("click", function(e){
    const anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 81
    }, 777);
    e.preventDefault();
    return false;
});
})