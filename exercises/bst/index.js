// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }

  insert(data) {
    // console.log(data, this.data);
    
    // if (this.data == null) {
    //   this.data
    // }

    if (data < this.data) {
      if (this.left == null) {
        this.left = new Node(data);
      } else {
        this.left.insert(data);
      }
    }
    else {
      if (this.right == null) {
        this.right = new Node(data);
      } else {
        this.right.insert(data);
      }
    } 
  }

  contains(data) {
    console.log(data, this.data);
    
    if (data === this.data) {
      return this;
    }

    if (data > this.data && this.right) {
      return this.right.contains(data);
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

function main() {
  const bst = new Node(7);
  bst.insert(10);
  bst.insert(12);
  bst.insert(7);
  bst.insert(9);
  bst.insert(3);
  
  console.log(bst.contains(12));
  
  // console.log(bst);
  
}
main();

module.exports = Node;
