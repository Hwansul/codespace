/**
 * Use the export operator to export modules for use in other files.
 * One way to do that is
 * by adding the export operator before the variable or function expression.
 */

export function add(num1, num2) {
  return num1 + num2;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * Alternatively, you can include an export at the end as a single line,
 * with an object of exported variables and functions.
 *
 * You can use the object property shorthand approach for this.
 */

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

export { add, subtract };
