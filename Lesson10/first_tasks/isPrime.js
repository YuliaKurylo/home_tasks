
function isPrime(n) {
    if (n == 1)
        return false;
    for (var j = 2; j * j <= n; j++) {
        if (n % j == 0)
            return false;
    }
    return true;
}
console.log(isPrime(5));
