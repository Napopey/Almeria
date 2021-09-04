$(function name(params) {

  $('.menu__btn').click(function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.open-popup').click(function(){
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no-scroll');
  });
  $('.close-popup').click(function(){
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
  });

  $('.price__items').slick({
    slidesToShow: 3,
    variableWidth: true,
    infinite: false,
    nextArrow: '<button type="button" class="slick-next"><svg width = "164" height = "67" viewBox = "0 0 164 67" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><circle cx="130.5" cy="33.5" r="33.5" fill="#2F73DB" fill-opacity="0.5"/><path d="M136.061 35.0607C136.646 34.4749 136.646 33.5251 136.061 32.9393L126.515 23.3934C125.929 22.8076 124.979 22.8076 124.393 23.3934C123.808 23.9792 123.808 24.9289 124.393 25.5147L132.879 34L124.393 42.4853C123.808 43.0711 123.808 44.0208 124.393 44.6066C124.979 45.1924 125.929 45.1924 126.515 44.6066L136.061 35.0607ZM0 35.5H135V32.5H0V35.5Z" fill="white"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width = "164" height = "67" viewBox = "0 0 164 67" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><circle cx="33.5" cy="33.5" r="33.5" transform="rotate(-180 33.5 33.5)" fill="#2F73DB" fill-opacity="0.5"/><path d="M27.9393 31.9393C27.3536 32.5251 27.3536 33.4749 27.9393 34.0607L37.4853 43.6066C38.0711 44.1924 39.0208 44.1924 39.6066 43.6066C40.1924 43.0208 40.1924 42.0711 39.6066 41.4853L31.1213 33L39.6066 24.5147C40.1924 23.9289 40.1924 22.9792 39.6066 22.3934C39.0208 21.8076 38.0711 21.8076 37.4853 22.3934L27.9393 31.9393ZM164 31.5L29 31.5V34.5L164 34.5V31.5Z" fill="white"/></svg></button>',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
    ]
  })

  $('.blueprints__items').slick({
    infinite: false,
    nextArrow: '<button type="button" class="slick-next"><svg width = "164" height = "67" viewBox = "0 0 164 67" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><circle cx="130.5" cy="33.5" r="33.5" fill="#2F73DB" fill-opacity="0.5"/><path d="M136.061 35.0607C136.646 34.4749 136.646 33.5251 136.061 32.9393L126.515 23.3934C125.929 22.8076 124.979 22.8076 124.393 23.3934C123.808 23.9792 123.808 24.9289 124.393 25.5147L132.879 34L124.393 42.4853C123.808 43.0711 123.808 44.0208 124.393 44.6066C124.979 45.1924 125.929 45.1924 126.515 44.6066L136.061 35.0607ZM0 35.5H135V32.5H0V35.5Z" fill="white"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width = "164" height = "67" viewBox = "0 0 164 67" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><circle cx="33.5" cy="33.5" r="33.5" transform="rotate(-180 33.5 33.5)" fill="#2F73DB" fill-opacity="0.5"/><path d="M27.9393 31.9393C27.3536 32.5251 27.3536 33.4749 27.9393 34.0607L37.4853 43.6066C38.0711 44.1924 39.0208 44.1924 39.6066 43.6066C40.1924 43.0208 40.1924 42.0711 39.6066 41.4853L31.1213 33L39.6066 24.5147C40.1924 23.9289 40.1924 22.9792 39.6066 22.3934C39.0208 21.8076 38.0711 21.8076 37.4853 22.3934L27.9393 31.9393ZM164 31.5L29 31.5V34.5L164 34.5V31.5Z" fill="white"/></svg></button>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
  })
  
  $('.video__tabs-item').on('click', function (e) {
    e.preventDefault();
    $('.video__tabs-item').removeClass('video__tabs-item--active');
    $(this).addClass('video__tabs-item--active');

    $('.video__item').removeClass('video__item--active');
    $($(this).attr('href')).addClass('video__item--active');

  });

  $('.tabs-bottom__item').on('click', function (e) {
    e.preventDefault();
    $('.tabs-bottom__item').removeClass('tabs-bottom__item--active');
    $(this).addClass('tabs-bottom__item--active');

    $('.tabs-top__item').removeClass('tabs-top__item--active');
    $($(this).attr('href')).addClass('tabs-top__item--active');

  });

})


