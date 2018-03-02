$(document).ready(function () {
    $('#nav').onePageNav();
    catalogSlide();
    imgIncrease();
    initSlider();
    imageGallery();
});

// catalog
function catalogSlide() {
    $('.slickslide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: false,
        slide: 'li',
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            },
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true

            }
        }],
        customPaging: function (slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }
    });
}


//fancybox
function imgIncrease() {
    $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title: {
                type: 'outside'
            },
            overlay: {
                speedOut: 0
            }
        }
    });

    // Disable opening and closing animations, change title type
    $(".fancybox-effects-b").fancybox({
        openEffect: 'none',
        closeEffect: 'none',

        helpers: {
            title: {
                type: 'over'
            }
        }
    });

    // Set custom style, close if clicked, change title type and overlay color
    $(".fancybox-effects-c").fancybox({
        wrapCSS: 'fancybox-custom',
        closeClick: true,

        openEffect: 'none',

        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                css: {
                    'background': 'rgba(238,238,238,0.85)'
                }
            }
        }
    });

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
        padding: 0,

        openEffect: 'elastic',
        openSpeed: 150,

        closeEffect: 'elastic',
        closeSpeed: 150,

        closeClick: true,

        helpers: {
            overlay: null
        }
    });

    /*
     *  Button helper. Disable animations, hide close button, change title type and content
     */

    $('.fancybox-buttons').fancybox({
        openEffect: 'none',
        closeEffect: 'none',

        prevEffect: 'none',
        nextEffect: 'none',

        closeBtn: false,

        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        },

        afterLoad: function () {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });


    /*
     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
     */

    $('.fancybox-thumbs').fancybox({
        prevEffect: 'none',
        nextEffect: 'none',

        closeBtn: false,
        arrows: false,
        nextClick: true,

        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

    /*
     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
     */
    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            prevEffect: 'none',
            nextEffect: 'none',

            arrows: false,
            helpers: {
                media: {},
                buttons: {}
            }
        });

    /*
     *  Open manually
     */

    $("#fancybox-manual-a").click(function () {
        $.fancybox.open('1_b.jpg');
    });

    $("#fancybox-manual-b").click(function () {
        $.fancybox.open({
            href: 'iframe.html',
            type: 'iframe',
            padding: 5
        });
    });

    $("#fancybox-manual-c").click(function () {
        $.fancybox.open([
            {
                href: '1_b.jpg',
                title: 'My title'
					}, {
                href: '2_b.jpg',
                title: '2nd title'
					}, {
                href: '3_b.jpg'
					}
				], {
            helpers: {
                thumbs: {
                    width: 75,
                    height: 50
                }
            }
        });
    });
}

// Slider
function initSlider() {
    $(".review-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        dots: true,
        autoplay: true,
        draggable: false,
        prevArrow: '<div class="prev-arrow"><div class="left-arrow"></div></div>',
        nextArrow: '<div class="next-arrow"><div class="right-arrow"></div></div>'
    });
}

//image gallery
function imageGallery() {
$('.fancybox').fancybox();

/*
 *  Different effects
 */

// Change title type, overlay closing speed
$(".fancybox-effects-a").fancybox({
    helpers: {
        title: {
            type: 'outside'
        },
        overlay: {
            speedOut: 0
        }
    }
});

// Disable opening and closing animations, change title type
$(".fancybox-effects-b").fancybox({
    openEffect: 'none',
    closeEffect: 'none',

    helpers: {
        title: {
            type: 'over'
        }
    }
});

// Set custom style, close if clicked, change title type and overlay color
$(".fancybox-effects-c").fancybox({
    wrapCSS: 'fancybox-custom',
    closeClick: true,

    openEffect: 'none',

    helpers: {
        title: {
            type: 'inside'
        },
        overlay: {
            css: {
                'background': 'rgba(238,238,238,0.85)'
            }
        }
    }
});

// Remove padding, set opening and closing animations, close if clicked and disable overlay
$(".fancybox-effects-d").fancybox({
    padding: 0,

    openEffect: 'elastic',
    openSpeed: 150,

    closeEffect: 'elastic',
    closeSpeed: 150,

    closeClick: true,

    helpers: {
        overlay: null
    }
});

/*
 *  Button helper. Disable animations, hide close button, change title type and content
 */

$('.fancybox-buttons').fancybox({
    openEffect: 'none',
    closeEffect: 'none',

    prevEffect: 'none',
    nextEffect: 'none',

    closeBtn: false,

    helpers: {
        title: {
            type: 'inside'
        },
        buttons: {}
    },

    afterLoad: function () {
        this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    }
});


/*
 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
 */

$('.fancybox-thumbs').fancybox({
    prevEffect: 'none',
    nextEffect: 'none',

    closeBtn: false,
    arrows: false,
    nextClick: true,

    helpers: {
        thumbs: {
            width: 50,
            height: 50
        }
    }
});

/*
 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
 */
$('.fancybox-media')
    .attr('rel', 'media-gallery')
    .fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',

        arrows: false,
        helpers: {
            media: {},
            buttons: {}
        }
    });

/*
 *  Open manually
 */

$("#fancybox-manual-a").click(function () {
    $.fancybox.open('1_b.jpg');
});

$("#fancybox-manual-b").click(function () {
    $.fancybox.open({
        href: 'iframe.html',
        type: 'iframe',
        padding: 5
    });
});

$("#fancybox-manual-c").click(function () {
    $.fancybox.open([
        {
            href: '1_b.jpg',
            title: 'My title'
					}, {
            href: '2_b.jpg',
            title: '2nd title'
					}, {
            href: '3_b.jpg'
					}
				], {
        helpers: {
            thumbs: {
                width: 75,
                height: 50
            }
        }
    });
});
}