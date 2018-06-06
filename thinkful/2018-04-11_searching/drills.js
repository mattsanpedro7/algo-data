// TREE TRAVERSAL
const BinaryTree = require('./lesson');

function main() {
  const bst = new BinaryTree();

  bst.insert(25);
  bst.insert(15);
  bst.insert(50);
  bst.insert(10);
  bst.insert(24);
  bst.insert(35);
  bst.insert(70);
  bst.insert(4);
  bst.insert(12);
  bst.insert(18);
  bst.insert(31);
  bst.insert(44);
  bst.insert(66);
  bst.insert(90);
  bst.insert(22);

  console.log('Pre-order\t', bst.preO());
  console.log('In-order\t', bst.inO());
  console.log('Post-order\t', bst.postO());
  console.log('Breadth-first\t', bst.bfs());
  console.log('Depth-first\t', bst.dfs());  

  // console.log(bst);


}
main();

// MAX PROFIT
const trading =  [128, 97, 121, 123, 98, 97, 105];
let max = -Infinity;
let indexMax;
const sellHigh = trading.forEach((value, index) => {
  // console.log(value, index);
  if (value > max) {
    max = value;
    indexMax = index;
  }
});
console.log('Sell at:', max, '; On time point:', indexMax);