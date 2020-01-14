define(['jquery'], function($) {
    function add(x, y) {
        let res = `module add: ${x} + ${y} equal: `;
        if ($.isNumeric(x) && $.isNumeric(y)) {
            return x + y
        } else {
            return 'NaN';
        }
    }
    return add
});