function palindrome(string) {
  let palindromeCount = 0;
  let dromeHashMap = new HashMap();
  let dromeCheck = string.split('');

  for(let i = 0; i<dromeCheck.length; i++){
    try{
      dromeHashMap.get(dromeCheck[i]);
      dromeHashMap.set(dromeCheck[i],0);
    }
    catch(e){
      dromeHashMap.set(dromeCheck[i],1);
    }
  }
  dromeCheck = [...new Set(dromeCheck)];
  dromeCheck.forEach(letter =>palindromeCount+=dromeHashMap.get(letter));

  return palindromeCount<2;
}