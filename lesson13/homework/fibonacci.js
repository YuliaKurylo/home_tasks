fibonacci = (function () {
    var memoriz = {};

    function fn(n) {
        var value;
        if (n in memoriz) {
            value = memoriz[n];
        } else {
            if (n === 0 || n === 1) {
                value = n;
            } else {
                value = fn(n - 1) + fn(n - 2);
                memoriz[n] = value;
            }
        }
        return value;
    }
    return fn;
})();
module.exports = fibonacci;