$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/chevron-right-solid.svg"></button>',
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1
      });
  });