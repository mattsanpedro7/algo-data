class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  
  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    //If the tree already exist, then start at the root, 
    //and compare it to the key you want to insert
    // If the new key is less than the node's key 
    //then the new node needs to live in the left-hand branch.
    else if (key < this.key) {
      //if the existing node does not have any left child, 
      //meaning that if the `left` pointer is empty 
      //then we can just instantiate and insert the new node 
      //as the left child of that node, passing `this` as the parent.  
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      //if the node has an existing left child, 
      //then we recursively call the `insert` method 
      //so the node is added further down the tree.
      else {
        this.left.insert(key, value);
      }
    }
    //Similarly, if the new key is greater than the node's key 
    //then you do the same thing, but on the right-hand side.
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

}

function main() {
  const bst = new BinarySearchTree();
  bst.insert(7);
  bst.insert(2);  
  bst.insert(1);
  bst.insert(3);
  bst.insert(5);
  
  bst.insert(10);
  bst.insert(8);  
  bst.insert(15);
  bst.insert(16);
  bst.insert(19);
  bst.insert(25);
  
  console.log(findHeight(bst));
  // console.log((bst));
}
main();

function findHeight(tree) {
  // count++;
  // console.log('TREE IS:', tree.key);
  // base case
  if (tree.left === null && tree.right === null) {
    return 1;
  }
  
  if (tree.left === null) {
    // console.log(findHeight(tree.right + 1));
    return findHeight(tree.right) + 1;
  }
  
  if (tree.right === null) {
    return findHeight(tree.left) + 1;
  }
  // return (Math.max([ 3, 4, 3, 6]))
  console.log('TREE', tree.left);
  // break;
  return (Math.max(findHeight(tree.left), findHeight(tree.right))) + 1
}

// write values on piece of sheet
/**
*
  g
*
*/
