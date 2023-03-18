/**
 * Find a substring inside a string.
 *
 * 1. It returns the index of where the substring starts in the string,
 * 2. or -1 if the substring isn’t found.
 *
 * It’s case-sensitive.
 */

let str = "I love Cape Cod potato chips.";

// Returns 7
str.indexOf("Cape Cod");

// Returns 7
str.indexOf("Cape C");

// Returns -1
str.indexOf("cape cod");
