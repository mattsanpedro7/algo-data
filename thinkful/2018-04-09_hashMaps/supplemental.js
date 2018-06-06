const palindrome = (hashMap) => {
  // console.log(hashMap._slots.length);
  // console.log('length is:', hashMap.length);
  for (let i=0; i<hashMap._slots.length; i++) {
    // console.log(i, hashMap._slots[i]);
    // console.log(lor);
    if (hashMap._slots[i] !== undefined) {
      console.log(i, hashMap._slots[i].value);
      // const word = hashMap._slots[i].value.toLowerCase().split('');
      const word = hashMap._slots[i].value;
      
      // console.log(word.length);

      let total = 0;
      for (let j=0; j<word.length; j++) {
        // console.log(word.charCodeAt(j));
        total += word.charCodeAt(j);
      }
      total = total * 101^10;
      console.log(total);
    }
  }
}

// const reverse_hash(L, R) = 

module.exports = { palindrome };
