/**
 * Create a new array with only elements
 * that pass a test you include as a callback function.
 *
 * The callback accepts three arguments:
 * 1. the current item in the loop’s value,
 * 2. its index, and
 * 3. the array itself.
 *
 * All three are optional.
 */

let numbers = [1, 2, 7, 42, 99, 101];

// Create a new array with only numbers greater than 10
let biggerThanTen = numbers.filter(function (item) {
  return item > 10;
});

// logs [42, 99, 101]
console.log(biggerThanTen);
