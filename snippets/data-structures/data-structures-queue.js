class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue(item) {
    return this.items.shift();
  }

  peek(item) {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

queue.isEmpty();    // true

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');

queue.isEmpty();    // false

queue.peek();       // 'A'

queue.dequeue();    // 'A'
queue.dequeue();    // 'B'
queue.dequeue();    // 'C'
