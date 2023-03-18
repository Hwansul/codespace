/**
 * Convert a string into an array by splitting it after a specific character (or characters).
 *
 * 1. The first argument, the delimiter, the character or characters to split by.
 * 2. As an optional second argument, you can stop splitting your string
 *    after a certain number of delimiter matches have been found.
 */

let shoppingList =
  "Soda, turkey sandwiches, potato chips, chocolate chip cookies";
let menu = shoppingList.split(", ");
let limitedMenu = shoppingList.split(", ", 2);

// logs ["Soda", "turkey sandwiches", "potato chips", "chocolate chip cookies"]
console.log(menu);

// logs ["Soda", "turkey sandwiches"]
console.log(limitedMenu);
