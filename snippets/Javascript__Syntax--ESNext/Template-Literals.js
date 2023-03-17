/**
 * Introduced in ES6, template literals provide a simpler way
 * to create strings that span multiple lines or contain data.
 *
 * Instead of quotes(' or "),
 * template literals start and end with backticks (`).
 *
 * You do not need to concatenate new lines in template literals.
 */

let str1 = `<h1>Hello, world!</h1>
	<p>How are you today?</p>`;

// logs "<h1>Hello, world!</h1><p>How are you today?</p>"
console.log(str1);

/**
 * You can use variables in template literals (sometimes called expressions)
 * by wrapping the name of the variable in curly brackets
 * with a leading dollar sign (${VARIABLE_NAME}).
 */

let greeting = "Hi, universe!";
let message = "How is the weather today?";

let str2 = `<h1>${greeting}</h1>
	<p>${message}</p>`;

// logs "<h1>Hi, universe!</h1><p>How is the weather today?</p>"
console.log(str2);
