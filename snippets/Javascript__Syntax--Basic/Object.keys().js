/**
 * Return an array of keys from an object.
 * Pass in the object as an argument.
 */

let lunch = {
  sandwich: "turkey",
  chips: "cape cod",
  drink: "soda",
};

// logs ["sandwich", "chips", "drink"]
let keys = Object.keys(lunch);
console.log(keys);
