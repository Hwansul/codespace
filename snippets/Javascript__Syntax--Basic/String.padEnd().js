/**
 * Add characters to the end of a string if it’s less than a certain length.
 * Accepts two arguments:
 * 1. the length the string should be, and
 * 2. what characters to add if it’s not that length.
 *
 * The characters to use is optional, and defaults to a space ().
 */

// Add a leading zero for hours below 10
let minutes0 = "0";
let minutes12 = "12";

// returns "00"
minutes0.padEnd(2, "0");

// returns "12"
minutes12.padEnd(2, "0");
