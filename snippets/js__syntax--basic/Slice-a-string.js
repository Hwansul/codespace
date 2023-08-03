/**
 * Get a portion of a string starting (and optionally ending) at a particular character.
 *
 * 1. The first argument is where to start. Use 0 to include the first character.
 * 2. The second argument is where to end (and is optional).
 *
 * If either argument is a negative integer,
 * it will start at the end of the string and work backwards.
 */

let text = "Cape Cod potato chips";

// returns "Cod potato chips"
text.slice(5);

// returns "Cod"
text.slice(5, 8);

// returns "Cape Cod potato"
text.slice(0, -6);

// returns "chips"
text.slice(-5);
