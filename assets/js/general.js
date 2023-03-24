jQuery = jQuery.noConflict();
/* remove passive event Listener */
jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        if (ns.includes("noPreventDefault")) {
            this.addEventListener("touchstart", handle, { passive: false });
        } else {
            this.addEventListener("touchstart", handle, { passive: true });
        }
    }
};

var windowWidth = document.body.clientWidth;
var CURATE = {
    init: function () {
        // init code goes here
        //HTML5 Sementic elements
        document.createElement("header");
        document.createElement("nav");
        document.createElement("main");
        document.createElement("figure");
        document.createElement("footer");

        CURATE.loadResize();
        jQuery(window).resize(function () {
            CURATE.loadResize();
        });

        CURATE.myFunction();
    },
    loadResize: function () {
        CURATE.windowWidth = document.body.clientWidth;
        // script for Desktop device
        if (CURATE.windowWidth >= 768) {

        } else {

        }
    },

    myFunction: function () {
        if (jQuery('.feedback-sider-1').length) {
            jQuery('.feedback-sider-1').slick({
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                draggable: false,
            });
        }
        if (jQuery('.feedback-sider-2').length) {
            jQuery('.feedback-sider-2').slick({
                autoplay: true,
                autoplaySpeed: 3500,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                centerMode: false,
                variableWidth: true,
                draggable: false,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                        },
                    },
                ]
            });
        }
    },
};

// when the page is ready, initialize everything
jQuery(document).ready(function () {
    CURATE.init();
});