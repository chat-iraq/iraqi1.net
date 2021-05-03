$(document).ready(function () {
	'use strict';
	// Adjust min-height Of Container
	var container = $('.container');
	container.css({
		'minHeight' : $(window).height() + 200
	});
	
   
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
   
    // Adjust The Block Sidebar Height
    $('.sidebar .block').height($('.container').height() - $('.footer').height());
   
    // Display Input Of Registring Code
   
    $('.click').click(function () {$('.code-inv').fadeIn(2000); });
});
