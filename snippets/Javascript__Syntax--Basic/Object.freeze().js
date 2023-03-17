/**
 * Make an object or array itself immutable.
 * Pass the array or object in as an argument.
 *
 * !!Once run, you can’t add, update, or delete items or properties from the array or object.
 */

let wizard = {
  name: "Merlin",
  age: "old AF",
};

// Freeze the wizard object
Object.freeze(wizard);

// Try to make updates
// This will not work
wizard.age = 42;
wizard.wand = true;
delete wizard.name;

// logs {name: "Merlin", age: "old AF"}
console.log(wizard);
