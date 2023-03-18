/**
 * Take the content of an array and return a single value.
 * That value can be anything: a string, number, object, or even another array.
 *
 * The Array.reduce() method accepts two arguments:
 * 1. a callback method to run against each item in the array, and
 * 2. a starting value.
 *
 * Both are required.
 *
 * The callback also accepts two arguments:
 * 1. the accumulator, which is the current combined value, and
 * 2. the current item in the loop.
 *    Whatever you return is used as the accumulator for the next item in the loop.
 *    On the very first loop, that starting value is used instead.
 */

// Add all of the numbers in an array
let numbers = [1, 2, 3];
let total = [1, 2, 3].reduce(function (sum, current) {
  return sum + current;
}, 0);

// logs 6
console.log(total);

// Create a new array with only the names of wizards in Huffepuff
let wizards = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];

// This combines what you would otherwise do with map() and filter() into one step
let hufflepuff = wizards.reduce(function (newArr, wizard) {
  if (wizard.house === "Hufflepuff") {
    newArr.push(wizard.name);
  }
  return newArr;
}, []);

// logs ["Cedric Diggory", "Tonks"]
console.log(hufflepuff);
