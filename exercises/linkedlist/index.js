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
    // if (this.head === null) {
    //   this.head = new Node(record, null);      
    // }
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
    if (!this.head) {
      return null;
    }
    let tempNode = this.head;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }

    return tempNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let tempNode = this.head;
    // tempNode = 
    console.log(this.head);
    // make the next node head
    this.head = this.head.next;
  }

  removeLast() {
    let tempNode = this.head;
    if (!this.head) {
      return null;
    } else if (this.head && !tempNode.next) {
      this.head = null;
    } else {
      while (tempNode.next.next) {
        tempNode = tempNode.next;
      }
  
      // console.log(tempNode);
      tempNode.next = null;
    } 
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

  isIndexIn(index) {
    // determine size of linkedlist
    const count = this.size(index);
    
    // exit if index out of bounds
    if (index < 0 || index >= count) {
      console.log('WARNING: Index is out of bounds');
      return false;
    } else {
      return true;
    }
  }

  getAt(index) {
    if (!this.isIndexIn(index)) {
      return null;
    }
    
    // loop through
    let tempNode = this.head;
    let parent = null;
    for (let i = 0; i <= index; i++) {
      parent = tempNode;
      tempNode = tempNode.next;
    }
    
    console.log('GETAT:', parent);
    return parent;
  }

  removeAt(index) {
    // out of bounds edge cases
    if (!this.isIndexIn(index)) {
      return null;
    }

    // if 1st in list, set head to next
    let tempNode;
    if (index === 0) {
      this.head = this.head.next;
    } else if (index === (this.size(this.head) - 1)) {
      // if last in list, set previous next to null    
      tempNode = this.getAt(index - 1);
      tempNode.next = null;
    } else {
      // if neither first or last node
      tempNode = this.getAt(index - 1);
      console.log('last node index:', index, 'node:', tempNode);
      tempNode.next = tempNode.next.next;
    }
  }

  insertAt(record, index) {
    // record not provided
    if (!record) {
      console.log('Please enter record');
      return null;
    }

    let tempNode;
    let parent = null;
    
    // if 1st in list, set node next to head
    if (index <= 0) {
      this.insertFirst(record);
    } else if (index >= this.size(this.head)) {
        console.log('INDEX OVER', this.size(this.head));
        this.insertLast(record);
    } else {
      tempNode = this.getAt(index - 1);
      parent = tempNode.next;
      tempNode.next = new Node(record, parent);
    }
  }

  print() {
    let count = -1;
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
  // LL.insertFirst('a');
  LL.insertFirst('Hello');  
  LL.insertFirst('How are you?');  

  LL.insertLast('Fine thank you');
  // LL.insertLast('b');
  
  // console.log('GetFirst:', LL.getFirst());
  // console.log('GetLast:', LL.getLast());  
  // LL.removeFirst();
  
  // LL.print();  
  // LL.removeLast();
  // LL.print();
  // console.log(JSON.stringify(LL));
  
  // LL.clear();

  // LL.getAt(2);

  console.log(LL.size());
  
  // LL.removeAt(1);

  LL.print();
  LL.insertAt('Bye Bye Bye', 30)
  LL.print();

  
}
main();

module.exports = { Node, LinkedList };
