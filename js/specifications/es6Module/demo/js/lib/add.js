function add(x, y) {
    if ($.isNumeric(x) && $.isNumeric(y)) {
        return Number(x) + Number(y)
    } else {
        return 'NaN';
    }
}

export default add;