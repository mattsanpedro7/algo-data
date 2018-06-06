/**
*
  LINEAR SEARCH

  Best case run time: O(1)
  Worst case: O(n)
  Average case: O(n)
*
*/

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
};
// console.log(indexOf([1,3,5,7,9], 7));

/**
*
  BINARY SEARCH

  only works on sorted arrays
  recursive function
  best case run time: O(1)
  average run time: O(log(n))
*
*/
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  // console.log(array.length);
  
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log('index:', index, '; item:', item);

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};
const arr = [1, 3, 5, 7, 9, 16, 38, 68, 97, 101];
const loc = (binarySearch(arr, 38));
// console.log(arr[loc]);


class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
  *
    DEPTH-FIRST SEARCH
  
    traverse as far down the tree before back-tracking
    O(n) since each node needs to be visited
  *
  */
  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  preO(values = []) {
    values.push(this.value);
    if (this.left) {
      values = this.left.preO(values);
    }
    
    if (this.right) {
      values = this.right.preO(values);
    }
    return values;
  }

  inO(values = []) {
    if (this.left) {
      values = this.left.inO(values);
    }
    values.push(this.value);
    
    if (this.right) {
      values = this.right.inO(values);
    }
    return values;
  }

  postO(values = []) {
    if (this.left) {
      values = this.left.postO(values);
    }
    
    if (this.right) {
      values = this.right.postO(values);
    }
    values.push(this.value);
    return values;
  }

  /**
  *
   BREADTH FIRST SEARCH
   
   first words across rows of a tree
  *
  */
  
  bfs(values = []) {
    const queue = [this];

    while (queue.length) {
      const node = queue.shift();
      values.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return values;
  }

  insert(value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.value == null) {
      this.value = value;
    }

    //If the tree already exist, then start at the root, 
    //and compare it to the key you want to insert
    // If the new key is less than the node's key 
    //then the new node needs to live in the left-hand branch.
    else if (value < this.value) {
      //if the existing node does not have any left child, 
      //meaning that if the `left` pointer is empty 
      //then we can just instantiate and insert the new node 
      //as the left child of that node, passing `this` as the parent.  
      if (this.left == null) {
        this.left = new BinaryTree(value);
      }
      //if the node has an existing left child, 
      //then we recursively call the `insert` method 
      //so the node is added further down the tree.
      else {
        this.left.insert(value);
      }
    }
    //Similarly, if the new key is greater than the node's key 
    //then you do the same thing, but on the right-hand side.
    else {
      if (this.right == null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

module.exports = BinaryTree;