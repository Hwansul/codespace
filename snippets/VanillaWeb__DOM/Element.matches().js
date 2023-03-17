/**
 * Check if an element would be selected by a particular selector or set of selectors.
 * Returns true if the element is a match, and false when it’s not.
 */

// Check if the first .bg-red element has the [data-snack attribute]
let red = document.querySelector(".bg-red");
if (red.matches("[data-snack]")) {
  console.log("Yummy snack!");
} else {
  console.log("No snacks");
}
