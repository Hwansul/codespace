/**
 * Return an array of key/value pairs from an object, also represented as arrays.
 * Pass in the object as an argument.
 */

let lunch = {
  sandwich: "turkey",
  chips: "cape cod",
  drink: "soda",
};

// logs [["sandwich", "turkey"], ["chips", "cape cod"], ["drink", "soda"]]
let entries = Object.entries(lunch);
console.log(entries);
