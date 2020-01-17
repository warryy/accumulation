import $ from './js/lib/jquery.js'
import add from './js/lib/add.js'

$('.js-x').bind('input', inputing);
$('.js-y').bind('input', inputing);

function inputing() {
    $('.js-res').html(add($('.js-x').val(), $('.js-y').val()));
}