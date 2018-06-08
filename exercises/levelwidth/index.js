// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');

function levelWidth(root) {
  let arr = [root, 's'];
  let counters = [0];
  // console.log(root.children);

  // node = arr;
  // console.log(node);
  
  
  // take root and put 's'
  // put children of root at end of array
  // increase counter by 1
  // throw out root
  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

function main() {
  const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

  levelWidth(root);

  // console.log(JSON.stringify(root));
  
}
main();

module.exports = levelWidth;
