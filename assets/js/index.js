// sass
import '../sass/app.scss';

// js
import 'bootstrap';
import 'slick-carousel';
import 'lightbox2';

$(function($) {
  $('.information-slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<span class="prev-arrow"></span>',
    nextArrow: '<span class="next-arrow"></span>'
  });
});