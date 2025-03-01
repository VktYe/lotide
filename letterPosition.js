// this code checks if twoo arrays are equal
const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPosition = function(sentence) {
  const result = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const currentLetter = sentence[i];
      
      if (!result[currentLetter]) { // if the letter key is not in result {}
        result[currentLetter] = [i]; // create a new letter key with it's current index number
      } else { // if key letter already exists
        result[currentLetter].push(i); // push current index to this key letter
      }
    }
  }
  
  return result;
};

assertArraysEqual(letterPosition("lighthouse in the house").h, [3, 5, 15, 18]); //assertion passed
assertArraysEqual(letterPosition("hello").e, [1]); // assertion passed
assertArraysEqual(letterPosition("this cat is funny").n, [14, 15]); //assertion passed