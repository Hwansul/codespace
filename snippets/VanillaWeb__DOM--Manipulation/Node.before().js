/**
 * Insert elements and strings before another element.
 * Call the Node.before() method on the node you want to insert before,
 * and pass in one or more new elements or strings as arguments.
 */

// Create a new element
let p = document.createElement("p");
p.textContent = "Hello!";

// Get the target node
let app = document.querySelector("#app");

// Insert the new node before the target node
// <p>Hello!</p><div id="app">Good evening</div>
app.before(p);

// You can inject more than one item by passing in multiple arguments
// <p>Hello!</p>What's poppin'<div id="app">Good evening</div>
app.before(p, `What's poppin?`);
