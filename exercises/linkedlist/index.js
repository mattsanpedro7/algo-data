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

  insertLast(record) {
    let tempNode = this.head;
    while (tempNode) {
      tempNode = tempNode.next;
    }
    console.log('LAST node', tempNode);
    
  }

  size() {
    let count = 0;
    let tempNode = this.head;
    while (tempNode) {
      count++;
      tempNode = tempNode.next;
    }
    return count;
  }

  print() {
    let count = 0;
    let tempNode = this.head;
    while (tempNode) {
      count++;
      console.log('Position:', count, '/// Node:', tempNode.data);
      tempNode = tempNode.next;
    }
    
  }
}

function main() {
  const LL = new LinkedList();
  LL.insertFirst('Hey');
  LL.insertFirst('Hello');  
  LL.insertFirst('How are you?');  

  LL.insertLast('Fine thank you');

  LL.print();
}
main();

module.exports = { Node, LinkedList };
