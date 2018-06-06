const slot = 58;
const slotKey = 25;
const key = 25;
const slotDeleted = false;

function check() {
  if (slot === undefined || (slotKey == key && !slotDeleted)) {
    return 'hello world';
  }
}

console.log(check());