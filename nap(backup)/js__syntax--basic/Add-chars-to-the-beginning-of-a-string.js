/**
 * Add characters to the beginning of a string
 * if it’s less than a certain length.
 *
 * Accepts two arguments:
 * 1. the length the string should be, and
 * 2. what characters to add if it’s not that length.
 *
 * The characters to use is optional, and defaults to a space ().
 */

// Add a leading zero for hours below 10
let hour3 = "3";
let hour12 = "12";

// returns "03"
hour3.padStart(2, "0");

// returns "12"
hour12.padStart(2, "0");
