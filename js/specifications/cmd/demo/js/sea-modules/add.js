define(function (require) {
    function add(x, y) {
        var $ = require('jquery');
        if ($.isNumeric(x) && $.isNumeric(y)) {
            return Number(x) + Number(y)
        } else {
            return 'NaN';
        }
    }
    return add
});