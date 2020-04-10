// sass
import '../sass/app.scss';

// js
import 'bootstrap';
import 'slick-carousel';
import 'lightbox2';
FontAwesomeConfig = {
  searchPseudoElements: true
};
import '@fortawesome/fontawesome-free/js/all.js';

import './agent';
import './select';

$(function ($) {
  // スムーススクロール
  $('.smooth').on('click', function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // slick
  $('.information-slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<span class="prev-arrow"></span>',
    nextArrow: '<span class="next-arrow"></span>',
    responsive: [{
      breakpoint: 991.98,  //ブレイクポイントを指定
      settings: {
        slidesToShow: 1,
      }
    }]
  });
});

$(window).on('load resize', function () {
  let width = $(window).width();
  let border = 991.98;
  // 画像srcリプレース
  if (width < border) { // sp
    $('.toggle-img').each(function () {
      $(this).attr('src', $(this).attr('src').replace('_pc', '_sp'));
    });
    $('.meter-taxi, .sightseeing').attr('data-toggle', 'modal');
    $('.meter-taxi').attr('data-target', '#modal-meter-taxi');
    $('.sightseeing').attr('data-target', '#modal-sightseeing');
  } else { // pc
    $('.toggle-img').each(function () {
      $(this).attr('src', $(this).attr('src').replace('_sp', '_pc'));
    });
    $('.meter-taxi, .sightseeing').removeAttr('data-toggle data-target');
  }
});