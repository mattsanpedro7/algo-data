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
    this.head = new Node(record, this.head);
  }

  insertLast(record) {
    let tempNode = this.head;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    // console.log(tempNode);
    tempNode.next = new Node(record, null);
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let tempNode = this.head;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    // console.log(tempNode);
    return tempNode;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let tempNode = this.head;
    // edge case: if nothing exists
    if (!this.head) {
      return null;
    // edge case: if only one item
    } else if (!tempNode.next) {
      this.head = null;
    } else {
      while (tempNode.next.next) {
        tempNode = tempNode.next;
      }
    }
  
    // console.log('REMOVELAST:', tempNode);
    tempNode.next = null;
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

  clear() {
    this.head = null;
  }

  isIndexIn(index) {
    if (index < 0 || index >= this.size()) {
      return false;
    } else {
      return true;
    }
  }

  getAt(index) {
    if (!this.isIndexIn()) {
      return null;
    }

    let tempNode = this.head;

    for (let i = 0; i < index; i++) {
      tempNode = tempNode.next;
    }

    console.log(tempNode);
    
  }

  removeAt(index) {
    if (!this.isIndexIn(index)) {
      return null;
    }

    if (index === 0) {
      this.removeFirst();
    } else if (index === this.size()-1) {
      this.removeLast();
    } else {
      let tempNode = this.head;
      for (let i = 0; i < index-1; i++) {
        tempNode = tempNode.next;
      }
      tempNode.next = tempNode.next.next;
    }

    // console.log(tempNode);
  }

  insertAt(record, index) {
    if (index < 0) {
      index = 0;
    } else if (index >= this.size()) {
      index = this.size();
    }
   
    if (index === 0) {
      this.insertFirst(record);
    } 
    // else if (index === this.size()-1) {
    //   this.insertLast(record);
    // } 
    else {
      let tempNode = this.head;

      for (let i = 0; i < index-1; i++) {
        tempNode = tempNode.next;
      }
      const tempNext = tempNode.next; 
      // console.log(tempNode);
      tempNode.next = new Node(record, tempNext);
    }
  }

  print() {
    let tempNode = this.head;
    let count = -1;
    console.log('PRINTING');
    
    while (tempNode) {
      count++;
      console.log('\tNode:', count, '/// Data:', tempNode.data);
      tempNode = tempNode.next;
    }
  }
}

function main() {
  const LL = new LinkedList();
  // LL.insertFirst('a');
  LL.insertFirst('Hello');  
  LL.insertFirst('How are you?');  

  LL.insertLast('Fine thank you');
  LL.insertLast('b');
  
  // console.log('GetFirst:', LL.getFirst());
  // console.log('GetLast:', LL.getLast());  

  // console.log('SIZE', LL.size());
  
  // LL.removeFirst();
  
  // LL.print();  
  // LL.removeLast();
  // LL.print();

  // console.log(JSON.stringify(LL));
  
  // LL.clear();

  // LL.getAt(3);

  // console.log(LL.size());
  
  // LL.print();
  // LL.removeAt(0);
  // LL.print();

  LL.print();
  LL.insertAt('Bye Bye Bye', 30)
  LL.print();
}

main();

module.exports = { Node, LinkedList };
