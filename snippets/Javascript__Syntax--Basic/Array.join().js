/**
 * Combine all items in an array into a string,
 * separated by a delimiter that you can pass in as an argument.
 * By default, it will use a comma (,) as the delimiter if one is not provided.
 */

let messages = ["I love Cape Cod potato chips.", "What about you?"];

let str = messages.join();
let strWithSpace = messages.join(" ");
let strWithSmiley = messages.join(" =) ");

// logs "I love Cape Cod potato chips.,What about you?"
console.log(str);

// logs "I love Cape Cod potato chips. What about you?"
console.log(strWithSpace);

// logs "I love Cape Cod potato chips. =) What about you?"
console.log(strWithSmiley);
