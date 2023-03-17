/**
 * In ES modules, side effects are “things that happen” in the module automatically, without the need for the developer to explicitly run a function.
 * ES modules don’t need to have an export, and when you import a module, you don’t have to access any exports if it has them. Anything that runs as part of the imported file will run automatically when imported.
 */

// sayHi.js
function sayHi() {
  console.log("Hello there!");
}

// Run on init
sayHi();

// "Hello there!" will be automatically logged
import "./sayHi.js";
