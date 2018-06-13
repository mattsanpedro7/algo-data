// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

function circular(list) {
  // console.log(list);
  
  let slow = list.head;
  let fast = list.head;

  while (fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    } else if (!fast.next || !fast.next.next) {
      // console.log('next DNE');
      return false;
    }
  } 

  return false;
}

function main() {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  console.log(circular(l));
}
main();

module.exports = circular;
