/**
 * Remove an item from an object. Use the delete operator on the key to remove.
 */

let lunch = {
  sandwich: "turkey",
  chips: "cape cod",
  drink: "soda",
};

// Remove the chips key from the lunch object
delete lunch.chips;

// logs {sandwich: 'turkey', drink: 'soda'}
console.log(lunch);
