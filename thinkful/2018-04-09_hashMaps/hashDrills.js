const HashMap = require('./hashMap.js');
// const {palindrome} = require('./supplemental');

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

const hashString = (string) => {
  let hash = 5381;
  for (let i=0; i<string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
  }
  return hash >>> 0;
}

const palindrome = (hashMap) => {
  // console.log(hashMap);

  // console.log(hashMap._slots.length);
  // console.log('length is:', hashMap.length);

  let is_palindrome;
  for (let i=0; i<hashMap._slots.length; i++) {
  // for (let i=1; i<2;i++) {
  
    // console.log(i, hashMap._slots[i]);
    // console.log(lor);
    // console.log(i);
    if (hashMap._slots[i] !== undefined) {
      const isPerm = new HashMap();

      console.log(i, hashMap._slots[i].value);
      const word = hashMap._slots[i].value.toLowerCase().split('');

      console.log(word);

      let check = [];
      for (let j=0; j<word.length; j++) {
        try {
          isPerm.get(word[j]);
          isPerm.set(word[j], 0);          
        } catch (e) {
          // console.log(e);
          isPerm.set(word[j], 1);
        }
      }

      let total = 0;
      for (let j=0; j<=isPerm.length; j++) {
        if (isPerm._slots[j] !== undefined) {
          // console.log(isPerm._slots[j].value);
          total += isPerm._slots[j].value;
        }
      }
      // console.log(isPerm);
      if (total === 1) {
        return true;
      } else {
        return false;
      }

    }

  }
}

// const reverse_hash(L, R) =

function main() {
  const lor = new HashMap();
  lor.MAX_LOAD_RATIO = 0.9;
  lor.SIZE_RATIO = 3;
  lor.set('Alpha', 'racecar')  
  lor.set('Hobbit', 'Bilbo')
  lor.set('Hobbit', 'Frodo')
  // lor.set('Wizard', 'Gandalf')
  // lor.set('Human', 'Aragorn')
  // lor.set('Elf', 'Logolas')
  // lor.set('Maiar', 'The Necromancer')
  // lor.set('Maiar', 'Sauron')
  // lor.set('RingBearer', 'Gollum')
  // lor.set('LadyOfLight', 'Galadriel')
  // lor.set('HalfElven', 'Arwen')
  // lor.set('Ent', 'Treebeard')

  // console.log(lor.get('Ent'));  
  // lor.remove('Ent')
  // console.log(lor.get('Ent'));

  // console.log(lor);
  // Drills
  console.log(palindrome(lor));
  // console.log('\tExperiment with looping:')
  // lor.loopSlot('Ent');
  // console.log(lor);
  // console.log(lor.loopSlot('Hobbit'));
}
main();

