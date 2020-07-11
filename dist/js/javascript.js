/* Start Code jquery -------------------------------------------------------------------------------------------------*/
$(document).ready(function () {

    "use strict";

    // click event on toggle menu 
    $(".toggle-collapse").click(function () {
        $(".nav").toggleClass("collapse");
    });

    // owl-carousel for blog
    const responsive = {
        0: {
            items:1,
        },
        320: {
            items:1,
        },
        560: {
            items:2,
        },
        960: {
            items:3,
        }
    };
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
        responsive:responsive,
    });

    // click to scroll top
    $(".move-up span").click(function () {
        $("html, body").animate({
            scrollTop:0,
        }, 1000);
    });

    // AOS Inatanse
    AOS.init();

    // Nice Scroll
    $("body").niceScroll({
        cursorcolor: "#a1c4fd",
        cursorwidth:"13px",
        zindex: "99999",
        cursorborder: "0",
        cursorborderradius: "0%",
        background: "#f1f1f1",
        autohidemode: false,
    });


});
/* End Code jquery ---------------------------------------------------------------------------------------------------*/



/* Start Code Javascript ---------------------------------------------------------------------------------------------*/
/* End Code Javascript -----------------------------------------------------------------------------------------------*/