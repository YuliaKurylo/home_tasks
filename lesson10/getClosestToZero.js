function getClosestToZero() {
    var toZero = arguments[0];
    for (var j = 1; j < arguments.length; j++) {
        if (Math.abs(toZero) > Math.abs(arguments[j])) {
            toZero = arguments[j];
        }
    }
    return toZero;
}
console.log(getClosestToZero(9, 5, -4, -9));
