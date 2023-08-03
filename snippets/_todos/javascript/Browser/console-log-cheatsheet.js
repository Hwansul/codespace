const x = 1, y = 2, z = 3;

console.log({x, y, z}); // {x: 1, y: 2, z: 3}

const outer = () => {
  const inner = () => console.trace('Hello');
  inner();
};

outer();
/*
  Hello
  inner @ VM207:3
  outer @ VM207:5
  (anonymous) @ VM228:1
*/

console.group('Outer');           // Create a group labelled 'Outer'
console.log('Hello');             // Log inside 'Outer'
console.groupCollapsed('Inner');  // Create a group labelled 'Inner', collapsed
console.log('Hellooooo');         // Log inside 'Inner'
console.groupEnd();               // End of current group, 'Inner'
console.groupEnd();               // End of current group, 'Outer'
console.log('Hi');                // Log outside of any groups

console.debug('Debug message');
console.info('Useful information');
console.warn('This is a warning');
console.error('Something went wrong!');

const value = 10;

console.assert(value === 10, 'Value is not 10!'); // Nothing is logged
console.assert(value === 20, 'Value is not 20!'); // Logs "Value is not 20!"

Array.from({ length: 4 }).forEach(
  () => console.count('items')  // Call the counter labelled 'items'
);
/*
  items: 1
  items: 2
  items: 3
  items: 4
*/
console.countReset('items');  // Reset the counter labelled 'items'

console.time('slow comp');    // Start the 'slow comp' timer
console.timeLog('slow comp'); // Log the value of the 'slow comp' timer
console.timeEnd('slow comp'); // Stop and log the 'slow comp' timer

console.log(
  'CSS can make %cyour console logs%c %cawesome%c!',  // String to format
  // Each string is the CSS to apply for each consecutive %c
  'color: #fff; background: #1e90ff; padding: 4px',   // Apply styles
  '',                                                 // Clear any styles
  'color: #f00; font-weight: bold',                   // Apply styles
  ''                                                  // Clear any styles
);
