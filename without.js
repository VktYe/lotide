// this code checks if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {  // first compares length of arrays
    return false;  // if not equal return false
  } for (let i = 0; i < arr1.length; i++) { // iterates through the values of the arr
    if (arr1[i] !== arr2[i]) {  // if not equal returns false
      return false;
    }
  }
  return true; // if length and values of the arrays equal returns true
};
  
// this code asserts if two arrays are equal
const assertArraysEqual = function(arr1, arr2) {
  
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) { //loops through source elements
  const newSource = []; //new array in which we going to push elements

  //outer loop
  for (let i = 0; i < source.length; i++) { //loops through source elements
    let shouldPush = true; 

  //inner loop
    for (let j = 0; j < itemsToRemove.length; j++) { //loops through itemsToRemove
    if (source[i] === itemsToRemove[j]) { //when finds matches, should sets to false 
      shouldPush = false; 
      break; //break inner loop after that
    } 
  }
  if (shouldPush) { //while shouldPush is true pushes source[i] to newSource
  newSource.push(source[i])
}
}
  console.log('Original: ', source);
  console.log('To remove:', itemsToRemove);
  console.log('Filtered: ', newSource);
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // ["hello", "world"]
without(words, ["world"]); // ["hello", "lighthouse"]
without(words, ["Viktoria"]); // ["hello", "world", "lighthouse"]

const numbers = [1, 2, 3 ,4 ,5];
without(numbers, [1]); // [2, 3 ,4 ,5]
without(numbers, [1, 2]);//[]

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(numbers, [1, 2, 3 ,4 ,5]);
