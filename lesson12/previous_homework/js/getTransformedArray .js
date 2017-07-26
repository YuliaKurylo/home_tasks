function getTransformedArray(arr, fn) {
   return forEach(arr, fn);
}

function increment(num, index, arr, newarr) {
    return num + 1;
}

console.log(getTransformedArray([1, 7, 20], increment));
