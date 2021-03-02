$(document).ready(function(){

  // Carousel

  $('.carousel__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/chevron-left-solid.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/chevron-right-solid.svg"></button>',
      centerMode: true,
      variableWidth: true,
      slidesToShow: 1
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__wrapper2').eq(i).toggleClass('catalog-item__wrapper2_active');
          })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

  // Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('fast');
    })

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('fast');
      })
    })
    
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    })

  // Validation

    function validateForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: 'required',
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Введите ваше имя",
            minlength: jQuery.validator.format("Нужно ввести как минимум {0} символа")
          },
          email: {
            required: "Введите ваш email",
            email: "Ваш email должен быть в формате: name@domain.com"
          },
          phone: {
            required: "Введите ваш мобильный телефон"
          }
        }
      });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    // Mailsend

    jQuery(function($){
      $('input[name=phone]').mask("9 (999) 999-99-99");
   });

   $('form').submit(function(e) {
     e.preventDefault();
     $.ajax({
       type: "POST",
       url: "php/formBitrixHook.php",
       data: $(this).serialize()
     }).done(function() {
       $(this).find('input').val('');
       $('#consultation, #order').fadeOut();
       $('.overlay, #thanks').fadeIn();
       $('form').trigger('reset');
     });
     return false;
   });

   // Smoothe scroll and page up

   $(window).scroll(function() {
     if ($(this).scrollTop() > 1600) {
       $('.pageup').fadeIn();
     } else {
      $('.pageup').fadeOut();
     }
   });

   $(function(){
    $("a[href=#up]").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
  });

  // Wow js animation

  new WOW().init();
});