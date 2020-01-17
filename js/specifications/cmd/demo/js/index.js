define(function (require) {
    var $ = require('jquery');
    var add = require('add');
    $('.js-x').bind('input', inputing);
    $('.js-y').bind('input', inputing);

    function inputing() {
        $('.js-res').html(add($('.js-x').val(), $('.js-y').val()));
    }
});