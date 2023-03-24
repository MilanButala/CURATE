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
    
    },
};

// when the page is ready, initialize everything
jQuery(document).ready(function() {
    CURATE.init();  
});