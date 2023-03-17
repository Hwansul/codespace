/**
 * Get the index of an item in an array.
 *
 * It returns
 * 1. the index of the item if it’s in the array,
 * 2. and -1 if it’s not.
 */

let sandwiches = ["turkey", "tuna", "ham", "pb&j"];

// returns 0
sandwiches.indexOf("turkey");

// returns 3
sandwiches.indexOf("pb&j");

// returns -1
sandwiches.indexOf("grilled cheese");
