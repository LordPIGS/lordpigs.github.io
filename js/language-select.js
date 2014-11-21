$(function () {
    $('.language-change').click(function () {
        lang = window.localStorage.setItem('language', $(this).attr('data-language'));
    });
})