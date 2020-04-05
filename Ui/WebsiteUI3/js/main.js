$(function () {


    $("body").append('<a id="back-to-top" href="#top"><i class="fa fa-arrow-up"></i></a>');
    $("#back-to-top").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(500)
        } else {
            $("#back-to-top").fadeOut(500)
        }
    });
    $("#back-to-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 500);
        return false
    });


    $('.ganav li.has-sub-nav > a').after('<div class="menu-trigger"><i class="fa fa-icon"></div>');


    $('.menuBar').click(function () {
        $('body').toggleClass('menu-actives');
    });




    $('.menu-trigger').click(function () {
        $(this).parent().siblings('.has-sub-nav').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.has-sub-nav').find('.gasubnav').slideUp(250);
        $(this).next('.gasubnav').slideToggle(250);
        $(this).next('.gasubnav').children('.has-sub-nav').find('.gasubnav').slideUp(250);
        $(this).next('.gasubnav').children('.has-sub-nav').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings().removeClass('menu-open');
        $(this).parent().toggleClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });


    $(document).ready(function () {
        $('body').addClass('popup-show');
    })

    $('button.popup-close').click(function () {
        $('body').removeClass('popup-show');
    });



    $(document).ready(function () {
        $(".tabs li a").click(function () {

            // Active state for tabs
            $(".tabs li a").removeClass("active");
            $(this).addClass("active");

            // Active state for Tabs Content
            $(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(200);
            $(this.rel).fadeIn(500).addClass("tab_content_active");

        });

    });

    $(document).ready(function () {
        $('#myBtnContainer button').click(function () {
            $('#myBtnContainer button').removeClass('activelink');
            $(this).addClass('activelink');
            var tagid = $(this).data('id');
            $('.list').removeClass('active').addClass('hide');
            $('#' + tagid).addClass('active').removeClass('hide');
        });
    });

    $('div#myBtnContainer button').each(function () {
        $('div#myBtnContainer button').click(function () {
            if ($(this).hasClass('active')) {
                $(this).siblings().removeClass('active');
            }
        });

    });


    $('.header-slides-wrap').slick({
        slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 15000,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }
      ]
    });


});