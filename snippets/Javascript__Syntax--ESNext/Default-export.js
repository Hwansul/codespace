/**
 * Instead of naming every function you want to import, you can alternatively import everything, and assign all of the imported items to a variable.
 * Instead of using object destructuring, import *, then,
 * assign it to a variable using the as opertor.
 * In our case, let’s use an underscore (_), common with helper libraries.
 */

import * as _ from "./helpers.js";

// Get the total
let total = _.add(num1, num2);
