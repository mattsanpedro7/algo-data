// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(element => {
      return element.data !== data;
    });
    // console.log(hi);
    
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {

  }
}

function main() {
  const node = new Node(1);
  node.add(5);
  node.add(7);
  // node.remove(5);

  node.children[1].add(9);
  // console.log(node.children);
  

  // const tree = new Tree();
  // tree.root = node;

  // tree.add(5);

  // console.log(tree);
  console.log(node);
  
}
main();

module.exports = { Tree, Node };
