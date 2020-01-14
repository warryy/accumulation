require(['jquery', 'add'], function($, add){
    $('div').html(`hello AMD,<br/> ${add(1, 'a')}`)
})