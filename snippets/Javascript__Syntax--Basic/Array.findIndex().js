/**
 * Find the index of an item in a multidimensional array (an array whose items include other arrays or objects).
 * Pass a callback function into the Array.findIndex() method.
 *
 * The callback itself accepts three arguments:
 * 1. the current item in the loop,
 * 2. the index of the current item in the loop, and
 * 3. the array itself.
 *
 * All three are optional, and you can name them anything you want.
 *
 * Inside the callback, you can check some conditions about the current item.
 * The Array.findIndex() method will return the index of the first item that you return true for.
 */

let sandwiches = [
  {
    name: "turkey",
    smelly: false,
  },
  {
    name: "tuna",
    smelly: true,
  },
  {
    name: "pb&j",
    smelly: false,
  },
];

// Find the index of the tuna sandwich
// returns 1
sandwiches.findIndex(function (sandwich) {
  if (sandwich.name === "tuna") {
    return true;
  }
});
