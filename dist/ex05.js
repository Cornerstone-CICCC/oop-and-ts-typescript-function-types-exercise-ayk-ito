"use strict";
// Create a function called sumAllNumbers.
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.
function sumAllNumbers(...result) {
    let sum = 0;
    result.forEach((e) => {
        sum += e;
    });
    return sum;
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Expected output: 15
