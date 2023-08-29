/**
 * Check if a string contains a substring.
 *
 * Returns a boolean:
 * 1. true if the string has the substring,
 * 2. and false if it doesn’t.
 *
 * It’s case-sensitive.
 */

let str = "I love Cape Cod potato chips.";

// returns true
str.includes("Cape Cod");

// returns false
str.includes("cape cod");

// returns false
str.includes("chocolate");
