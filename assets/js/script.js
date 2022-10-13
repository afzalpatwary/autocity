/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ======================================================
 * this function execute when window properly loaded
 * =========================================================
 */

$(window).on('load', function () {

    // banner video autoplay
    // $(function () {
    //     if ($('#banner-video').length) {
    //         document.getElementById("banner-video").play();
    //     }
    // });

});



/**
 * ======================================================
 * this function execute when DOM element ready 
 * =========================================================
 */

$(document).ready(function () {

    // animation  start
    // when trigged specific section
    $(function () {
        let iterationCount = true;
        $(window).on('scroll', function () {
            let scrollTop = $(this).scrollTop();
            let bannerSubTitle = $('.banner-content .banner-sub-title');
            let bannerTitle = $('.banner-content .banner-title');
            bannerSubTitle.css({ 'opacity': (1 - scrollTop / 350) });
            bannerTitle.css({ 'opacity': (1 - scrollTop / 350) });

            if ($('#request-to-sell').length) {
                let elemOffsetTop = $('#request-to-sell').offset().top
                let elemHeight = $('#request-to-sell').outerHeight();
                if (scrollTop >= (elemOffsetTop - elemHeight)) {
                    if (iterationCount) {
                        setTimeout(function () {
                            $('#request-sell').addClass('start-animation');
                        }, 1000)
                        iterationCount = false
                    }
                }
            }
        });
    });


    // parallax with jarallax
    $(function () {
        if ($('.jarallax').length) {
            jarallax(document.querySelectorAll('.jarallax'));
        }
    });


    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });


});
