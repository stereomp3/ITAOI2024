; (function ($) {
    "use strict"
    var nav_offset_top = $('.header_area').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    // function navbarFixed() {
    //     if ($('.header_area').length) {
    //         $(window).scroll(function () {
    //             var scroll = $(window).scrollTop();
    //             if (scroll >= nav_offset_top) {
    //                 $(".header_area").addClass("navbar_fixed");
    //             } else {
    //                 $(".header_area").removeClass("navbar_fixed");
    //             }
    //         });
    //     };
    // };
    // navbarFixed();

    function testimonialSlider() {
        if ($('.testimonial_slider').length) {
            $('.testimonial_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 2,
                nav: false,
                autoplay: true,
                dots: true,
                smartSpeed: 1500,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                }
            })
        }
    }
    testimonialSlider();

    //------- Mailchimp js --------//  

    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    /* ===== Parallax Effect===== */

    function parallaxEffect() {
        $('.bg-parallax').parallax();
    }
    parallaxEffect();


    $('select').niceSelect();
    $('#datetimepicker11,#datetimepicker1').datetimepicker({
        daysOfWeekDisabled: [0, 6]
    });

    /*---------gallery isotope js-----------*/
    function galleryMasonry() {
        if ($('#gallery').length) {
            $('#gallery').imagesLoaded(function () {
                // images have loaded
                // Activate isotope in container
                $("#gallery").isotope({
                    itemSelector: ".gallery_item",
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            })
        }
    }
    galleryMasonry();

    /*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/

    if ($('#mapBox').length) {
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ebebeb"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                }
            ]
        });
    }

})(jQuery)


window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('header_area_main');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (window.pageYOffset < 20) {
                mainNav.classList.remove(['navbar_fixed']);
            }
            else if (currentTop > 0) {
                mainNav.classList.add('navbar_fixed');
            }

        } else {
            // Scrolling Down
            mainNav.classList.remove(['navbar_fixed']);
        }
        scrollPos = currentTop;
    });
})

// IntersectionObserver Introduction: https://jim1105.coderbridge.io/2022/07/30/intersection-observer/、https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const my_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const animated_item = entry.target.querySelector('.animated-item');

        if (entry.isIntersecting) {
            // square.classList.add(['animated', 'fadeInUp']);
            // square.classList.add(['animated', 'fadeInUp']);
            animated_item.classList.add('animated');
            animated_item.classList.add('fadeInUp');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        //   animated_item.classList.remove('animated');
        //   animated_item.classList.remove('fadeInUp');
    });
});

function observe_animated_wrappers() {
    var animated_wrappers = document.querySelectorAll('.animated-wrapper');
    for (var i = 0; i < animated_wrappers.length; i++) {
        my_observer.observe(animated_wrappers[i]);
    }
}
observe_animated_wrappers();

function more_news() {
    // Create an "li" node:
    const node = document.createElement("div");
    node.innerHTML = more_news_content
    new_area = document.getElementById("NewsArea")
    news_button = document.getElementById("more_news")
    news_button.style.display = "none"
    // Append the "li" node to the list:
    new_area.appendChild(node);
    observe_animated_wrappers();
}

const more_news_content = `<div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="Sponsor.html"> 主辦與贊助單位已更新 </a>
    </li>
    <p class="post-subtitle">FEB 21, 2024</p>
</ul>
</div>
<div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="Program.html"> 大會議程已更新 </a>
    </li>
    <p class="post-subtitle">FEB 21, 2024</p>
</ul>
</div>
<div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="https://itaoi2024.nqu.edu.tw/openconf/openconf.php"> 報名系統更新 </a>
    </li>
    <p class="post-subtitle">FEB 20, 2023</p>
</ul>
</div>
<div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="submit_info.html"> 投稿資料更新 </a>
    </li>
    <p class="post-subtitle">DEC 01, 2023</p>
</ul>
</div>
<div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="traffic_stay.html"> 交通資訊已更新 </a>
    </li>
    <p class="post-subtitle">DEC 01, 2023</p>
</ul>
</div>
<div class="post-preview animated-wrapper">
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="Special_section.html"> 特別議程已更新 </a>
    </li>
    <p class="post-subtitle">DEC 01, 2023</p>
</ul>
</div>
<div class="post-preview animated-wrapper">
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="traffic_stay.html"> 住宿資訊已更新</a>
    </li>
    <p class="post-subtitle">NOV 29, 2023</p>
</ul>
</div>
<div class="post-preview animated-wrapper">
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="venue.html">大會地點已更新</a>
    </li>
    <p class="post-subtitle">NOV 29, 2023</p>
</ul>
</div>
<div class="post-preview animated-wrapper">
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="Date.html"> 重要日期已更新</a>
    </li>
    <p class="post-subtitle">NOV 23, 2023</p>
</ul>
</div>
<div class="post-preview animated-wrapper">
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href=""> 網站架設 </a>
    </li>
    <p class="post-subtitle">NOV 15, 2023</p>
</ul>
</div>
</br>
`