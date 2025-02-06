"use strict";
// Define a function called subtract that takes two numbers and returns their difference.
// Use typeof to assign the same type as subtract to the mySubtract variable.
function subtract(x, y) {
    return x - y;
}
const mySubtract = function (x, y) {
    return subtract(x, y);
};
console.log(mySubtract(10, 5)); // Expected output: 5
console.log(mySubtract(256, 2)); // Expected output: 254
