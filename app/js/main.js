$(function () {
  /* $(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    $("nav").css({
      "background-color": "rgba(255, 255, 255, " + (scroll / 250) + ") ",
      "box-shadow": "0 2px 6px rgba(187, 187, 187, " + (scroll / 150) + ")"
    });
    
  });
  if ($(this).scrollTop() >= 100) {
    $('.navbar').addClass("darkheader");
  } */

  $(function () {
    function updateNav() {
      let scroll = $(window).scrollTop();
      let $nav = $("nav");
      if (scroll > 0) {
        $nav.css({
          "background-color": "rgba(255, 255, 255, " + (scroll / 250) + ") ",
          "box-shadow": "0 2px 6px rgba(187, 187, 187, " + (scroll / 150) + ")"
        });
      } else {
        $nav.css({
          "background-color": "",
          "box-shadow": ""
        });
      }
    }

    // Обновляем состояние навигационного меню при загрузке страницы
    updateNav();

    $(window).on('scroll', function () {
      updateNav();
    });

    // Обновляем состояние навигационного меню при изменении хэша адресной строки
    $(window).on('hashchange', function () {
      updateNav();
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
  $("a[href*='#']").on("click", function (e) {
    const anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 81
    }, 777);
    e.preventDefault();
    return false;
  });
  //Card 1
  $('#webinar1 .webinar__item-day').html('Чт, 09 Марта');
  $('#webinar1 .date__day').html('Чт. 09.03.23'); //дата главная страница
  $('#webinar1 .webinar__item-time').html('13:00');
  $('#webinar1 .date__time').html('13.00-13.45 мск'); //время главная страница
  $('#webinar1 .webinar__item-title').html('ПОВТОР Методолог здорового человека<br><br>');
  $('#webinar1 .subheader__webinar-title').html('ПОВТОР Методолог здорового человека<br><br>'); //subheader main
  $('#webinar1 .webinar__item-img').attr('src', 'images/webinat_img_2.jpg');
  $('#webinar1 .webinar__item-link').add('#webinar1 .subheader__webinar-link').attr('href', '/povtor_metodist');
  //Card 2
  $('#webinar2 .webinar__item-day').html('Пн, 13 Марта');
  $('#webinar2 .date__day').html('Пн. 13.03.23'); //дата главная страница
  $('#webinar2 .webinar__item-time').html('14:00');
  $('#webinar2 .date__time').html('14.00-14.45 мск'); //время главная страница
  $('#webinar2 .webinar__item-title').html('Продажи в чат-ботах: инструкция по применению от Salebot и SOHO.LMS');
  $('#webinar2 .subheader__webinar-title').html('Продажи в чат-ботах: инструкция по применению от Salebot и SOHO.LMS'); //subheader main
  $('#webinar2 .webinar__item-img').attr('src', 'images/webinat_img_4.jpg');
  $('#webinar2 .webinar__item-link').add('#webinar2 .subheader__webinar-link').attr('href', '/irinasmart');
  //Card 3
  $('#webinar3 .webinar__item-day').html('Вс, 16 Апреля');
  $('#webinar3 .date__day').html('Вс. 16.04.23'); //дата главная страница
  $('#webinar3 .webinar__item-time').html('12:00');
  $('#webinar3 .date__time').html('12.00-12.45 мск'); //время главная страница
  $('#webinar3 .webinar__item-title').html('Слишком много клиентов? Как не потерять и всех удовлетворить<br><br>');
  $('#webinar3 .subheader__webinar-title').html('Слишком много клиентов? Как не потерять и всех удовлетворить'); //subheader main
  $('#webinar3 .webinar__item-img').attr('src', 'images/webinat_img_6.jpg');
  $('#webinar3 .webinar__item-link').add('#webinar3 .subheader__webinar-link').attr('href', '/mnogoklientov');
  //Card 4
  $('#webinar4 .webinar__item-day').html('Пт, 21 Апреля');
  $('#webinar4 .date__day').html('Пт. 21.04.23'); //дата главная страница
  $('#webinar4 .webinar__item-time').html('14:00');
  $('#webinar4 .date__time').html('14.00-14.45 мск'); //время главная страница
  $('#webinar4 .webinar__item-title').html('Тренды онлайн образования. Путеводитель в edtech<br><br>');
  $('#webinar4 .subheader__webinar-title').html('Тренды онлайн образования. Путеводитель в edtech'); //subheader main
  $('#webinar4 .webinar__item-img').attr('src', 'images/webinat_img_5.jpg');
  $('#webinar4 .webinar__item-link').add('#webinar4 .subheader__webinar-link').attr('href', '/trendy');
  //card 5
  $('#webinar5 .webinar__item-day').html('Ср, 01 Марта');
  $('#webinar5 .date__day').html('Ср. 01.03.23'); //дата главная страница
  $('#webinar5 .webinar__item-time').html('16:00');
  $('#webinar5 .date__time').html('16.00-16.45 мск'); //время главная страница
  $('#webinar5 .webinar__item-title').html('Методолог здорового человека<br><br><br>');
  $('#webinar5 .subheader__webinar-title').html('Методолог здорового человека<br><br>'); //subheader main
  $('#webinar5 .webinar__item-img').attr('src', 'images/webinat_img_2.jpg');
  $('#webinar5 .webinar__item-link').add('#webinar5 .subheader__webinar-link').attr('href', '/metodist');
  //card 6
  $('#webinar6 .webinar__item-day').html('Ср, 22 Февраля');
  $('#webinar6 .date__day').html('Ср. 22.02.23'); //дата главная страница
  $('#webinar6 .webinar__item-time').html('14:00');
  $('#webinar6 .date__time').html('14.00-14.45 мск'); //время главная страница
  $('#webinar6 .webinar__item-title').html('Прогрел, зарегал, обучил. Как сделать из учеников бесплатный канал лидогенерации');
  $('#webinar6 .subheader__webinar-title').html('Прогрел, зарегал, обучил. Как сделать из учеников бесплатный канал лидогенерации'); //subheader main
  $('#webinar6 .webinar__item-img').attr('src', 'images/webinat_img_1.jpg');
  $('#webinar6 .webinar__item-link').add('#webinar6 .subheader__webinar-link').attr('href', '/progorel');
})