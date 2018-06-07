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
    // console.log('HEAD:', this.head, 'DATA:', record);
    this.head = new Node(record, this.head);
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

  getFirst() {
    return this.head;
  }

  getLast() {
    let tempNode = this.head;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }

    return tempNode;
  }

  clear() {
    this.head = null;
  }

  insertLast(record) {
    let tempNode = this.head;
    if (tempNode === null) {
      this.insertFirst(record);
    } else {
      while (tempNode.next) {
        tempNode = tempNode.next;
        // console.log(tempNode.data);
        
      }
      // console.log('LAST node', tempNode);
      tempNode.next = new Node(record, null);
    }
  }


  print() {
    let count = 0;
    let tempNode = this.head;
    while (tempNode) {
      count++;
      console.log('Position:', count, '/// Data:', tempNode.data);
      tempNode = tempNode.next;
    }
    
  }
}

function main() {
  const LL = new LinkedList();
  LL.insertFirst('a');
  // LL.insertFirst('Hello');  
  // LL.insertFirst('How are you?');  

  // LL.insertLast('Fine thank you');
  LL.insertLast('b');
  
  // console.log('GetFirst:', LL.getFirst());
  // console.log('GetLast:', LL.getLast());  
  
  LL.print();
  // console.log(JSON.stringify(LL));
  
  LL.clear();
}
main();

module.exports = { Node, LinkedList };
