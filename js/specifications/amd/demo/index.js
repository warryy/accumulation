require(['jquery', 'add'], function($, add){
    $('.js-x').bind('input', inputing);
    $('.js-y').bind('input', inputing);

    function inputing() {
        $('.js-res').html(add($('.js-x').val(), $('.js-y').val()));
    }
})