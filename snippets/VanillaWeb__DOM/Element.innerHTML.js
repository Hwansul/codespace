/**
 * Get and set the HTML content inside an element as a string.
 */

let greeting = document.querySelector(".greeting");

// Get HTML content
// returns "<p>Hello world!</p>"
let html = greeting.innerHTML;

// Set HTML content
// This replaces what was in there already
greeting.innerHTML =
  'We can dynamically change the HTML. We can even include HTML elements like <a href="#">this link</a>.';

// Add HTML to the end of an element's existing content
greeting.innerHTML += " Add this after what is already there.";

// Add HTML to the beginning of an element's existing content
greeting.innerHTML = "We can add this to the beginning. " + elem.innerHTML;

// You can inject entire elements into other ones, too
greeting.innerHTML += "<p>A new paragraph</p>";
