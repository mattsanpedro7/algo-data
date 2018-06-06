function filter(arr, predicate) {
  // base case
  if (!arr.length){
    return [];
  }

  if (predicate(arr[0])) {
    const ans = [arr[0], ...filter(arr.slice(1), predicate)];
    console.log(ans);
    return ans;
  }

  return filter(arr.slice(1), predicate);

}

let arr = [10,5,6,3,8];
console.log(filter(arr, x => x < 11));
