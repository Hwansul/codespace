/**
 * Sort and reorder the items in an array.
 * It modifies the original! array,
 * and by default will order the items alphanumerically.
 */

let wizards = ["Merlin", 42, "Gandalf", 2022, "Radagast"];

// Sort the wizard array
// [2022, 42, "Gandalf", "Merlin", "Radagast"]
wizards.sort();

/**
 * You can optionally pass in a callback function that will modify the default sorting behavior.
 * The Array.sort() method loops through each item, and passes two items at a time as arguments into the callback function.
 * You can compare those two items, and return an integer telling Array.sort() what to do with them.
 *
 * If you return -1, it will place the first item before the second one.
 * If you return 1, it will move the second item before the current one.
 * If you return 0 (or nothing at all), it will leave them unchanged.
 *
 * See this for more information about compare function:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
 */

let trees = [
  {
    type: "White pine",
    pineCones: 4,
  },
  {
    type: "Blue spruce",
    pineCones: 3,
  },
  {
    type: "Douglas fir",
    pineCones: 7,
  },
];

// sort the array so that the tree with the most pine cones is first,
// and the one with the least pine cones is last
trees.sort(function (tree1, tree2) {
  // If the tree1 has more pine cones, put it before tree2
  if (tree1.pineCones > tree2.pineCones) {
    return -1;
  }

  // Otherwise, put tree2 before tree1
  return 1;
});
