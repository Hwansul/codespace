/**
 * Replace all instances of a string inside another string, without the need for a regular expression.
 *
 * The String.replaceAll() method accepts two arguments:
 * 1. the string to find, and
 * 2. the string to replace it with.
 */

// Awkwardly worded, but roll with it
let wizards =
  "Of all the wizards in Lord of the Rings, Radagast is my favorite of the wizards.";

// returns "Of all the sorcerers in Lord of the Rings, Radagast is my favorite of the sorcerers."
let sorcerers = wizards.replaceAll("wizards", "sorcerers");
