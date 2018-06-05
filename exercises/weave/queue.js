// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data.slice(-1);
  }
}

// function main() {
//   let Test = new Queue();
//   Test.add(1);
//   Test.add(2);
//   Test.add(3);
//   Test.add(4);

//   Test.peek();
// }
// main();

module.exports = Queue;
