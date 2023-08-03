/**
 * Check for the existence of an attribute (including data attributes) on an element.
 */

let elem = document.querySelector("#lunch");

if (elem.hasAttribute("data-drink")) {
  console.log("Add a drink!");
}
