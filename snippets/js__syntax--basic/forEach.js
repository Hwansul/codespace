/**
 * The Array.forEach() and NodeList.forEach() methods provide a simpler way
 * to iterate over arrays and NodeLists while still having access to the index.
 * You pass a callback function into the forEach() method.
 *
 * The callback itself accepts three arguments:
 * 1. the current item in the loop,
 * 2. the index of the current item in the loop, and
 * 3. the array itself.
 *
 * All three are optional, and you can name them anything you want.
 */

let sandwiches = ["turkey", "tuna", "ham", "pb&j"];

// logs 0, "tuna", 1, "ham", 2, "turkey", 3, "pb&j"
sandwiches.forEach(function (sandwich, index) {
  console.log(index); // index
  console.log(sandwich); // value
});
