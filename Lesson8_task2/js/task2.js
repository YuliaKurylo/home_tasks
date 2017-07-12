var euro = prompt("Put the sum in euro");
var dollar = prompt("Put the sum in dollar");
var eurocof = 29.58;
var dollarcof = 25.95;
alert(`${"euros are equal to "}${euro*eurocof}${" UAN, "}${dollar}${" dollars are equal to "}${dollar*dollarcof}${" UAN,"}${" one euro is equal to "}${(eurocof/dollarcof).toFixed(3)}${"dollars"}`);
