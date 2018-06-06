/**
*
  _hasString: takes a string and hashes it, outputting a number
  http://www.cse.yorku.ca/~oz/hash.html
  _slots: constructor sets up array, which holds all the data
  MAX_LOAD_RATIO: highest ratio between length and the capacity allowed to reach

  Resolving collisions:
    1. open addressing, hash key to nearest empty slot
*
*/
class HashMap {
  constructor(initialCapacity=8) {
      this.length = 0;
      this._slots = [];
      this._capacity = initialCapacity;
  }

  static _hashString(string) {
      let hash = 5381;
      for (let i=0; i<string.length; i++) {
          hash = (hash << 5) + hash + string.charCodeAt(i);
          hash = hash & hash;
      }
      return hash >>> 0;
  }

  /**
  *
    ADDING ITEMS

    set: function checks load ratio (if greater than given maximum)
    _resize: resizes hash map
  *
  */
  
  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
        this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key);
    this._slots[index] = {
        key,
        value
    };
    this.length++;
  }

  /**
  *
    _findSlot: find correct slot for given key
    _hasString: function to calculate hash of key
  *
  */
  
  _findSlot(key) {
      const hash = HashMap._hashString(key);
      const start = hash % this._capacity;

      for (let i=start; i<start + this._capacity; i++) {
          const index = i % this._capacity;
          const slot = this._slots[index];
          if (slot === undefined || slot.key == key) {
              return index;
          }
      }
  }

  /**
  *
    recreate the hash map from scratch with larger capacity
  *
  */
  
  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._slots = [];

    for (const slot of oldSlots) {
        if (slot !== undefined) {
            this.set(slot.key, slot.value);
        }
    }
  }
}

// when 90% slots filled, resize will take place
HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;
