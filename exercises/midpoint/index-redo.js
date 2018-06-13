// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

function midpoint(list) {
  // console.log(list.head);
  
  let slow = list.head;
  let fast = list.head;

  while (fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (!fast.next || !fast.next.next) {
      return slow;
    }
  }

  return slow;
}

function main() {
  const LL = new LinkedList();

  LL.insertLast('a');
  LL.insertLast('b');
  LL.insertLast('c');
  LL.insertLast('d');
  LL.insertLast('e');

  console.log(midpoint(LL));
  // console.log(JSON.stringify(LL));
}
main();

module.exports = midpoint;
