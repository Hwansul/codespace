/**
 * Get the first item in an array that satisfies a conditions you specify in a callback function.
 * If no match is found, it returns undefined.
 * The callback accepts an argument that represents the current item as the method loops through the array.
 * It should return a boolean value (true or false).
 */

let sandwiches = ["turkey", "tuna", "ham", "pb&j"];

// logs "turkey"
let turkey = sandwiches.find(function (sandwich) {
  return sandwich === "turkey";
});
console.log(turkey);

// logs "ham"
// "pb&j "also has 3 letters, but "ham" shows up first in the array
let threeLetters = sandwiches.find(function (sandwich) {
  return sandwich.length === 3;
});
console.log(threeLetters);
