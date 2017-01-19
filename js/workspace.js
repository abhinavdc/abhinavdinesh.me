/*global $, document, jQuery, smoothScroll, window, WOW*/

$(document).ready(function () {

    'use strict';

    // smooth scroll plugin switch with custom speed
    smoothScroll.init({
        speed: "1500",
        updateURL: false
    });

    // make scroll to top button doing its job
    $(".up").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });

    $(window).load(function () {

      // remove loading screen after page contents loading complete
        $(".overlay").fadeOut(400, function () {
            $(this).remove();
        });
    });

    $('.loading p').delay(6000).fadeIn();

    $('#myStat').circliful({
        animationstep: '.5',
        bordersize: 2
    });
    $('#myStat-a').circliful({
        animationstep: '.5',
        bordersize: 2
    });
    $('#myStat-b').circliful({
        animationstep: '.5',
        bordersize: 2
    });
    $('#myStat-c').circliful({
        animationstep: '.5',
        bordersize: 2
    });

    new WOW().init();








   //  jQuery.scrollSpeed(120, 900);

});