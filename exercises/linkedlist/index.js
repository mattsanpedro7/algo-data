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

  getAt(index) {
    // determine size of linkedlist
    let count = 0;
    let tempNode = this.head;
    while (tempNode) {
      count++;
      tempNode = tempNode.next;
    }
    console.log(count);
    
    // exit if index out of bounds
    if (index < 0 || index >= count) {
      console.log('index is out of bounds');
      return null;
    }

    // // exit if no index provided
    // if (!index) {
    //   console.log('please input index');
    //   return null;
    // }
    
    // loop through
    tempNode = this.head;
    
    console.log('index:', index);
    

    let parent = null;
    for (let i = 0; i <= index; i++) {
      parent = tempNode;
      tempNode = tempNode.next;
      console.log('ITER:', i, parent);
    }
    
    return parent;
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

  LL.getAt(1);

  LL.print();
  
}
main();

module.exports = { Node, LinkedList };
