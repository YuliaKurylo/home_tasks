var arr = [2, 0.1, -5, 100, 3];

function largest(arr) {

    return Math.max.apply(null, arr);

}
module.exports = largest;
