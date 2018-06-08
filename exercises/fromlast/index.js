// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

function fromLast(list, n) {
  // console.log(list);
  
  let slow = list.head;
  let fast = list.head;

  // initialize fast with n
  for (let i = 0; i < n; i++) {
    if (!fast.next) {
      console.log('Linked list is not that long');
      return null;
    }
    fast = fast.next;
  }

  // advance slow and fast by one until fast next is null
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;

  }
  console.log('SLOW', slow);
  console.log('FAST', fast);
  
  return slow;
}

function main() {
  const list = new List();
  list.insertLast('a');
  list.insertLast('b');
  list.insertLast('c');
  list.insertLast('d');
  console.log(fromLast(list, 3)); // 'b'
}
main();

module.exports = fromLast;