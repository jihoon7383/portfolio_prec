$(function () {
    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#headerin ul li').on('click', function () {
        let i = $(this).index();
        $('html, body').animate({
            scrollTop: winHeight * i
        });
    });

    function scrollPage() {
        let scr = $(window).scrollTop();
        for (let i = 0; i < $('#headerin ul li').length; i++) {
            if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
                $('#headerin ul li').removeClass('on');
                $('#headerin ul li').eq(i).addClass('on');
            }
        }
    }
    $('.pager ul li').on('click', function () {
        let i = $(this).index();
        $('html, body').animate({
            scrollTop: winHeight * i
        });
    });

    /*     function scrollPage() {
            let scr = $(window).scrollTop();
            for (let i = 0; i < $('.pager ul li').length; i++) {
                if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
                    $('.pager ul li').removeClass('on');
                    $('.pager ul li').eq(i).addClass('on');
                }
            }
        } */

    $('header ,section').on('mousewheel', function (e, d) {
        if (d > 0) {
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });

        } else if (d < 0) {
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            });
        }
    })


    $(window).on('scroll', function () {
        let scr = $(this).scrollTop();

        if (scr >= winHeight * 0 && scr < winHeight * 1) {
            $('.pager').css({ opacity: 0 })
            //css transition추가
        } else {
            $('.pager').css({ opacity: 1 })
        }
    })





    $('.tab li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont>div').eq(i).css({ display: 'block' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    })

});

































































































