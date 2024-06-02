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
        <a class="post-meta animated-item" href="Date.html"> 投稿時間延長 </a>
    </li>
    <p class="post-subtitle">MAR 21, 2024</p>
</ul>
</div><div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="information_security.html"> 離島盃資安競賽開放報名 </a>
    </li>
    <p class="post-subtitle">MAR 21, 2024</p>
</ul>
</div>
<div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="nstc.html"> 國科會成果發表與交流會議程已更新 </a>
    </li>
    <p class="post-subtitle">MAR 21, 2024</p>
</ul>
</div>
<div class="post-preview animated-wrapper"> 
<ul>
    <li style="font-size: 28px;">
        <a class="post-meta animated-item" href="signup.html"> 報名系統已更新 </a>
    </li>
    <p class="post-subtitle">MAR 05, 2024</p>
</ul>
</div>
<div class="post-preview animated-wrapper"> 
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
function forum01() {
    document.getElementById('ITAOI_Content').innerHTML = forum_sharer01
}
function forum02() {
    document.getElementById('ITAOI_Content').innerHTML = forum_sharer02
}
function forum03() {
    document.getElementById('ITAOI_Content').innerHTML = forum_sharer03
}
const forum_sharer01 = `
<div class="container">
            <div class="row gx-4 gx-lg-5 justify-content-center animated-wrapper">
                <div class="col-xl-10 contextP animated-item">
                    </br></br>
                    <h2 class="title title_color" style="color: #000; text-align: center;">業界論壇分享者</h2>
                    <div class="button-group-area mt-10" style="text-align: center;">
                        <a onclick="forum01()" class="genric-btn primary-border circle" style="width: 30%;">Gilbert
                            Lin</a>
                        <a onclick="forum03()" class="genric-btn primary-border circle" style="width: 30%;">王國棟</a>
                        <a onclick="forum02()" class="genric-btn primary-border circle" style="width: 30%;">Teddy
                            Chuang</a>
                    </div>
                    </br></br>
                    <div class="row">
                        <div class="col-md-12 animated-wrapper">
                            <div class="animated-item">
                                <a style="color: #234fad; padding-bottom: 0.5vw; font-size: 35px;">
                                    林展吉 （Gilbert Lin）</a></br></br>

                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <h2>
                                            <li style="color: rgb(90,90,90); font-size: 25px; list-style-image: none;">
                                                東亞 台灣區 通路業務 協理
                                            </li>
                                        </h2>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <h2>
                                            <li style="color: rgb(90,90,90); font-size: 25px; list-style-image: none;">
                                                伊頓飛瑞慕品股份有限公司 （Eaton Taiwan） 電氣事業部
                                            </li>
                                        </h2>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 animated-wrapper">
                            <div class="animated-item">
                                <img src="image/keynote_speaker/forum_sharing.png" width="100%">
                            </div>
                        </div>
                        <div class="col-md-9 animated-wrapper">
                        <div class="animated-item" style="color:rgb(20,20,20);">
                                <div class="post-preview animated-wrapper">
                                        <h2>
                                            <p style="color: rgb(90,90,90); font-size: 25px; list-style-image: none;">
                                                ＂教育市場AI機房設施發展趨勢＂
                                            </p>
                                        </h2>
                                </div>
                                <p align="left" style="font-size: 16px; text-align: justify;">林展吉在近三十年的工作經歷中大都從事業務推廣及通路銷售等相關業務工作，因緣際會在
                                    2005年自網路資安產業轉職於力登（Raritan）電腦接觸到機房內終端電力設備之管理，進而在
                                    2011年於艾默生（Emerson）網絡能源得以規劃銷售數據機房整體解決方案，2014年加入伊頓（Eaton）集團後成為台灣區通路業務推廣團隊之一員，在電力與能源相關的領域約有16年的資歷。
                                </p>
                                <p align="left" style="font-size: 16px; text-align: justify;">2014 年加入伊頓集團至今，帶領台灣區通路業務團隊拓展國內市場，小至容量 500VA
                                    個人使用之不斷電系統，大至1,100kVA可供半導體生產線使用之超大型單機不斷電系統均有銷售紀錄，雖然伊頓為不斷電系統之國內領導品牌，近十年手上負責之銷售業績仍大幅成長超過兩倍以上有餘，憑藉著豐富的經銷渠道之管理經驗，除了佈建新的通路經銷商，制定經銷商管理規則，建立客訴服務系統並迅速回應客戶，針對既有經銷體系之管理也不遺餘力。
                                </p>
                                <p align="left" style="font-size: 16px; text-align: justify;">
                                    因應國內數據資料中心市場成長趨勢，加上熟悉電力相關產品線之緣故，經常建議公司整合除了不斷電系統外之產品線並加以包裝成數據資料中心解決方案來試圖增加銷售營業額，同時輔以市場行銷之動能，藉以加速產品的銷售及品牌的曝光，林展吉針對伊頓集團在台灣市場的推廣及發展仍保有相當的熱情，未來將持續帶領著伊頓通路業務團隊經營客戶、服務客戶，並以創新的思維參與組織調整與工作任務轉換的重大使命。
                                </p>
                            </div>
                        </div>
                        </br></br>
                        <div class="col-md-12 animated-wrapper">
                            <div class="animated-item">
                                <h2 style="margin: 3%; color: #234fad;">經歷</h2>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            伊頓飛瑞慕品(股)有限公司 通路業務協理 2014 ~迄今
                                        </li>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            美商艾默生網絡能源有限公司 通路經理 2011~2014
                                        </li>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            懇懋科技(股)公司 經銷業務處處長 2008~2011
                                        </li>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            美商力登電腦(股)有限公司 通路業務經理 2005~2008
                                        </li>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            大同(股)公司 業務經理 2002~2005
                                        </li>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            智邦科技(股)公司 產品經理 1999~2002
                                        </li>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            台康電腦(股)有限公司 業務專員 1997~1999
                                        </li>
                                    </ul>
                                </div>
                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <li style="color: rgb(90,90,90); font-size: 20px; list-style-image: none;">
                                            統一南聯貿易股份有限公司 業務代表 1995~1997
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        </br>
                    </div>

                    </br></br></br></br></br></br>
                </div>

            </div>

        </div>
`
const forum_sharer02 = `
<div class="container">
    <div class="row gx-4 gx-lg-5 justify-content-center animated-wrapper">
        <div class="col-xl-10 contextP animated-item">
            </br></br>
            <h2 class="title title_color" style="color: #000; text-align: center;">業界論壇分享者</h2>
            <div class="button-group-area mt-10" style="text-align: center;">
                        <a onclick="forum01()" class="genric-btn primary-border circle" style="width: 30%;">Gilbert
                            Lin</a>
                        <a onclick="forum03()" class="genric-btn primary-border circle" style="width: 30%;">王國棟</a>
                        <a onclick="forum02()" class="genric-btn primary-border circle" style="width: 30%;">Teddy
                            Chuang</a>
                    </div>
            </br></br>
            <div class="row">
                <div class="col-md-12 animated-wrapper">
                    <div class="animated-item">
                        <a style="color: #234fad; padding-bottom: 0.5vw; font-size: 35px;">
                            莊永杰 （Teddy Chuang） </a></br></br>
                        <div class="post-preview animated-wrapper">
                            <ul>
                                <h2>
                                    <li style="color: rgb(90,90,90); font-size: 25px; list-style-image: none;">
                                        Fortinet 資深業務協理 
                                    </li>
                                </h2>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 animated-wrapper">
                    <div class="animated-item">
                        <img src="image/keynote_speaker/forum_sharing02.png" width="100%">
                    </div>
                </div>
                <div class="col-md-9 animated-wrapper">
                    <div class="animated-item" style="font-size: 20px; color:rgb(20,20,20);">
                        <div class="post-preview animated-wrapper">
                                <h2>
                                    <p style="color: rgb(90,90,90); font-size: 25px; list-style-image: none;">
                                        ＂資安即國安，FORTINET 協助你懂資安＂
                                    </p>
                                </h2>
                        </div>
                        </br>
                        
                        <p align="left" style="text-align: justify;">莊永杰先生目前任職於台灣 Fortinet 資深業務協理，在資訊科技產業擁有超過18年
                            的豐富經歷，了解科技市場動態，並熟悉網路架構與應用程式支援等關鍵IT策略，
                            洞悉客戶需求，協助企業提供最完善的資安相關解決方案部署及資安事件應變處理。
                        </p>
                    </div>
                </div>
            </div>

            </br></br></br></br></br></br>
        </div>
    </div>
</div>
`
const forum_sharer03 = `
<div class="container">
    <div class="row gx-4 gx-lg-5 justify-content-center animated-wrapper">
        <div class="col-xl-10 contextP animated-item">
            </br></br>
            <h2 class="title title_color" style="color: #000; text-align: center;">業界論壇分享者</h2>
            <div class="button-group-area mt-10" style="text-align: center;">
                        <a onclick="forum01()" class="genric-btn primary-border circle" style="width: 30%;">Gilbert
                            Lin</a>
                        <a onclick="forum03()" class="genric-btn primary-border circle" style="width: 30%;">王國棟</a>
                        <a onclick="forum02()" class="genric-btn primary-border circle" style="width: 30%;">Teddy
                            Chuang</a>
                    </div>
            </br></br>
            <div class="row">
                        <div class="col-md-12 animated-wrapper">
                            <div class="animated-item">
                                <a style="color: #234fad; padding-bottom: 0.5vw; font-size: 35px;">
                                    王國棟 </a></br></br>

                                <div class="post-preview animated-wrapper">
                                    <ul>
                                        <h2>
                                            <li style="color: rgb(90,90,90); font-size: 25px; list-style-image: none;">
                                                飆機器人_至盛科技 總經理
                                            </li>
                                        </h2>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 animated-wrapper">
                            <div class="animated-item">
                                <img src="image/keynote_speaker/forum_sharing03.jpg" width="100%">
                            </div> 
                        </div> 
                        <div class="col-md-9 animated-wrapper"> 
                            <div class="animated-item" style="color:rgb(20,20,20);">
                                <div class="post-preview animated-wrapper">
                                    <h2>
                                        <p style="color: rgb(90,90,90); font-size: 25px; list-style-image: none;">
                                            ＂2024 生成式 AI 創客浪潮＂
                                        </p>
                                    </h2>
                                </div>\
                                </br>
                                <p align="left" style="font-size: 18px; text-align: justify;">在這個充滿活力的2024年，我們將一起探索生成式
                                    AI 創客浪潮如何深入我們的生活。這場演講將帶您了解一個全新的 SDGs
                                    AI世界，一個不需要網路連接、沒有使用門檻、低能耗、完全免費、無任何使用限制，並且不斷與時俱進的 OpenVINO AI 實務應用。
                                </p>
                                <p align="left" style="font-size: 18px; text-align: justify;">我們將展示如何在沒有網路的環境下使用
                                    AI，讓全校都能夠享受到AI 的便利，每一個學生都能從中獲得實實在在的成果——這就是我們的目標 【
                                    班班有AI，生生有成果】。在這場演講中，我們將分享實用的案例和動人的故事，展現從< 分辨式 AI>到< 生成式AI>
                                            如何在教育、專題、工作、甚至是日常生活中發揮其獨特的魅力。它不僅是技術的展現，更是一種全新的生活方式。
                                </p>
                                <p align="left" style="font-size: 18px; text-align: justify;">
                                    讓我們一起迎接這場 AI 創客浪潮，探索 AI 如何在我們的生活中扮演關鍵角色，並且為我們帶來前所未有的便利和成就。
                                </p>
                                </br></br></br></br></br></br>
                            </div>
                        </div>
                        </br></br>
                    </div>
            </div>
        </div>
    </div>
</div>
`