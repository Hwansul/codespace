/**
 * Loop through arrays, NodeLists, and other array-like objects.
 */

let sandwiches = ["turkey", "tuna", "ham", "pb&j"];

// logs 0, "tuna", 1, "ham", 2, "turkey", 3, "pb&j"
for (let i = 0; i < sandwiches.length; i++) {
  console.log(i); // index
  console.log(sandwiches[i]); // value
}
