/*! main.js
 *  Author: Abdellah Yassine
 *  Gmail: abdo.yasiny@gmail.com
 *  Blog: http://infocoderspro.blogspot.com;
 * */
$(function () {
    'use strict';
    // Activate Nice Scroll Plugin
    $('html').niceScroll({
        cursorcolor: "#89c132",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorwidth: "10px",
        cursorborder: "1px solid #89c132",
        cursorborderradius: "5px",
        scrollspeed: 100
    });
    // Center Carousel Caption
    $('.carousel-caption').css({'paddingBottom': ($('.carousel-inner').height() - $('.carousel-caption').height()) / 2});
    $('.carousel-caption').css({'paddingTop': ($('.carousel-inner').height() - $('.carousel-caption').height()) / 2});
});