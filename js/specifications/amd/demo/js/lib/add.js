define(['jquery'], function($) {
    function add(x, y) {
        let res = `module add: ${x} + ${y} equal: `;
        if ($.isNumeric(x) && $.isNumeric(y)) {
            return `${res}${x + y}`
        } else {
            console.error('参数类型不为数字');
            return `${res}NaN`;
        }
    }
    return add
});