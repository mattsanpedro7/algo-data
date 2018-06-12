// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
    return this.data.shift();
  }

  print() {
    console.log(this.data);
  }
}

function main() {
  let Test = new Queue();
  Test.add(1);
  Test.add(2);  
  Test.add(3);
  Test.remove();

  Test.print();
}
main()



module.exports = Queue;
