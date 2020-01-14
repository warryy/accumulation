define(['jquery'], function($) {
    function add(x, y) {
        let res = `module add: ${x} + ${y} equal: `;
        if ($.isNumeric(x) && $.isNumeric(y)) {
            return Number(x) + Number(y)
        } else {
            return 'NaN';
        }
    }
    return add
});