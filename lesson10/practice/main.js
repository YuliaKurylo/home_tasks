
var greeting = function (name) {
    if (name !== "") {
        return alert("Hello " + name);
    } else {
        return alert("Hello anonym!");
    }
}

var userName = prompt("Your name: ");
greeting(userName);

var add = function (a, b) {
    return a + b;
}

var substr = function (a, b) {
    return a - b;
}

var multipl = function (a, b) {
    return a * b;
}

var div = function (a, b) {
    return a / b;
}

var oper = prompt("Input operation: ");
var mathFunction = function (oper) {
    switch (oper) {
        case "+":
            {
                return add;
            }
        case "-":
            {
                return substr;
            }
        case "*":
            {
                return multipl;
            }
        case "/":
            {
                return div;
            }
    }
}
console.log(mathFunction("+")(1, 3));

var mathFunctionArrow = function (oper) {
    switch (oper) {
        case "+":
            {
                return (a, b) => {
                    return a + b
                };
            }
        case "-":
            {
                return (a, b) => {
                    return a - b
                };
            }
        case "*":
            {
                return (a, b) => {
                    return a * b
                };
            }
        case "/":
            {
                return (a, b) => {
                    return a / b
                };
            }
    }
}
console.log(mathFunctionArrow("/")(4, 2));

var arr = [1, 2, 3];

var task = function () {
    for (var i = 0; i < arr.length; i++) {
        someFunc(arr[i]);
    }
};

function someFunc(a) {
    console.log(a);
}

task();


var pow = function (x, n = 2) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res *= x;
    }
    return res;
}

var userData = function () {
    var number = prompt("Input number = ");
    var powerr = prompt("Input power = ");
    alert(pow(number, powerr));
}

userData();

var sumArbitrary = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumArbitrary(1, 2, 3));
