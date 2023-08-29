/**
 * Loop over iterable objects.
 * Iterable objects include strings, arrays, and other array-like objects. such as:
 * NodeLists, HTMLCollections, and HTMLFormControlsCollection,
 * But not plain object({})...
 * It is more appropriate to use for ... in syntax for plain object.
 */

let sandwiches = ["turkey", "tuna", "ham", "pb&j"];

// logs "tuna", "ham", "turkey", "pb&j"
for (let sandwich of sandwiches) {
  console.log(sandwich);
}
