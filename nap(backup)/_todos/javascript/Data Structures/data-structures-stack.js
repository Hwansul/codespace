class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.unshift(item);
  }

  pop(item) {
    return this.items.shift();
  }

  peek(item) {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

stack.push('apples');
stack.push('oranges');
stack.push('pears');

stack.isEmpty();    // false

stack.peek();       // 'pears'

stack.pop();        // 'pears'
stack.pop();        // 'oranges'
stack.pop();        // 'apples'

stack.isEmpty();    // true
