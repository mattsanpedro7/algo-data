const BinarySearchTree = require('./bst');

function main() {
  const bst = new BinarySearchTree();
  // bst.insert(9);
  // bst.insert(5);
  // bst.insert(3);

  // bst.insert(14);
  // bst.insert(11);
  // bst.insert(10);
  // bst.insert(12);
  // bst.insert(15);
  // bst.insert(16);
  
  
  bst.insert(7);
  bst.insert(2);  
  bst.insert(1);
  bst.insert(3);
  bst.insert(5);
  
  bst.insert(10);
  bst.insert(8);  
  bst.insert(15);
  bst.insert(16);

  // bst.insert(19);
  // bst.insert(25);
  // bst.insert(27);
  // bst.insert(29);
  
  

  // console.log(bst);
  console.log(findHeight(bst));
  // console.log(isBST(bst));
  
  // console.log(isBST(bst));
  // console.log(thirdLarge(bst));
  // console.log(balancedBST(bst));
  // console.log(bst);
  
  console.log(minDepth(bst));
  console.log(isBalanced(bst));
  
  
}
main()

// const count = 0;
function findHeight(tree) {
  if (tree === null) {
    return 0;
  }
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
  // console.log(findHeight(tree.left));
  // console.log(findHeight(tree.right));
  
  return (Math.max(findHeight(tree.left), findHeight(tree.right))) + 1
}

function isBST(bst, status=false) {
  
  if (bst.left === null && bst.right === null) {
    return 1;
  }
  
  if (bst.left === null) {
    return isBST(bst.right) + 1;
  }
  
  if (bst.right === null) {
    return isBST(bst.left) + 1;
  }
  
  if (bst.right.key < bst.key || bst.left.key > bst.key) {
    return false;
  }

  if (!isBST(bst.right) && !isBST(bst.left)) {
    return status;
  }

  return true;
}

function minDepth(tree) {
  if (tree === null) {
    return 0;
  }
  if (tree.left === null && tree.right === null) {
    return 1;
  }
  if (tree.left === null) {
    return minDepth(tree.right) + 1
  }
  if (tree.right === null) {
    return minDepth(tree.left) + 1
  }
  return Math.min(minDepth(tree.left), minDepth(tree.right)) + 1
}


function isBalanced(tree) {
  if ((findHeight(tree) - minDepth(tree)) <= 1 ) {
    return true;
  }
  return false;
}

// let arr = [];
function thirdLarge(bst, arr = []) {
  console.log(bst.left.key);
  if (bst.left.key) {
    arr.push(bst.left.key);
    return thirdLarge(bst.left);
  }
  // if ()
  


  
}

function balancedBST(bst, arr = [], count = []) {
  if (bst.right) {
    
  }
  // if (!bst.left || !bst.right) {
  //   count++;
  //   arr.push(count)
  //   return arr;
  // }

  // if (tree.left === null && tree.right === null) {
  //   count++;
  //   return 1;
  // }

  // if (bst.left)
  
}

