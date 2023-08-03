/**
 * Remove the first item from an array and returns it. The array is modified.
 */

let wizards = ["Gandalf", "Radagast", "Merlin"];
let first = wizards.shift();

// logs "Gandalf"
console.log(first);

// logs ["Radagast", "Merlin"]
console.log(wizards);
