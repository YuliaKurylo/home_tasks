const compose = require(‘. / compose’);
const toUpper = string => string.toUpperCase();
const classyGreeting = (firstName, lastName) =>
    "The name's " + lastName + ", " + firstName + " " + lastName;

function compose() {
    return Array.prototype.reduceRight.call(arguments, function(previousFunc, currentFunc) {
        return function() {
            return currentFunc(previousFunc.apply(null, arguments));
        }
    });
}
const yellGreeting = compose(toUpper, classyGreeting,);
module.exports = yellGreeting;
