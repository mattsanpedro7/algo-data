// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    console.log('HEAD:', this.head, 'DATA:', record);
    this.head = new Node(record, this.head);
  }

  print() {
    console.log(this.head);
  }
}

function main() {
  const LL = new LinkedList();
  LL.insertFirst('Hi');
  LL.insertFirst('Hello');  
  LL.print();
}
main();

module.exports = { Node, LinkedList };
