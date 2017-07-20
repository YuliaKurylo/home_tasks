function getMin() {
    var minnumber = arguments[0];
    for (var i = 1; i < arguments.length; ++i) {
        if (minnumber > arguments[i]) {
            minnumber = arguments[i];
        }
    }
    return minnumber;

}
console.log(getMin(3, 0, -3));
