var arr = [2, 0.1, -5, 100, 3];

function smallest(arr) {

    return Math.min.apply(null, arr);

}
module.exports = smallest;
