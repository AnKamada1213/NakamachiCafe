$(document).ready(function () {
    // ロゴ表示
    $(window).on('load', function () {
        $('#splash, #splash_logo').fadeOut();
    });

    // スムーススクロール
    $('a[href^="#"]').on('click', function (e) {
        if ($(this).closest('.tab').length) return;
        let target = $($(this).attr("href"));
        $('html, body').animate({ scrollTop: target.offset().top }, 600, "swing");
        e.preventDefault();
    });

    // ハンバーガーメニューのトグル
    $('.hamburger').on('click', function () {
        $('#header').toggleClass('open');
    });

    // メニューリンククリック時にメニューを閉じる
    $('.sp-nav a').on('click', function () {
        $('#header').removeClass('open');
    });

    // PageTopボタン
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= window.innerHeight) {
            $('#page-top').removeClass('DownMove').addClass('UpMove');
        } else {
            $('#page-top').removeClass('UpMove').addClass('DownMove');
        }
    });

    $('#page-top a').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
});