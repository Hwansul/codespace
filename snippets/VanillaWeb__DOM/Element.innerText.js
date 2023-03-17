/**
 * Get and set the rendered text of an element (and omit the markup).
 * The Element.innerText property returns only rendered text,
 * similar to what a user would be able to select with their cursor or the keyboard when highlighting text.
 * Any HTML elements included in a string when setting content are automatically encoded and rendered as-is.
 */

let elem = document.querySelector(".greeting");

// Get text content
// returns "Hello world!"
let text = elem.innerText;

// Set text content
// This completely replaces whats there, including any HTML elements
elem.innerText = "We can dynamically change the content.";

// Add text to the end of an element's existing content
elem.innerText += " Add this after what is already there.";

// Add text to the beginning of an element's existing content
elem.innerText = "We can add this to the beginning. " + elem.innerText;

// HTML elements are automatically encoded and rendered as-is
elem.innerText = "<p>See you later!</p>";
