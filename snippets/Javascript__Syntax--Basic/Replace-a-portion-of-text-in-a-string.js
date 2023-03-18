/**
 * Replace a portion of text in a string with something else.
 * The String.replace() method accepts two arguments:
 * 1. the string to find, and
 * 2. the string to replace it with.
 */

let text = "I love Cape Cod potato chips!";

// returns "I love Lays potato chips!"
text.replace("Cape Cod", "Lays");

/*
 * By default, the String.replace() method replaces the first match.
 * To replace all matches, you’ll need to pass in a regular expression with the global flag (g).
 * or you can use String.replaceAll() in order to do same thing.
 */

let chips = "Cape Cod potato chips are my favorite brand of chips.";

// Only replaces the first instance of the word "chips"
chips.replace("chips", "deep fried potato slices");

// Replaces all instances of the word "chips"
chips.replace(new RegExp("chips", "g"), "deep fried potato slices");
