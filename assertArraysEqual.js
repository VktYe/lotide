// Task
// Implement assertArraysEqual:
// - will take in two arrays and assert them
// -> will console.log an appropriate message to the console.
// - message similar to assertEqual

const eqArrays = function(arr1, arr2) {
// this code checks if twoo arrays are equal
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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // passed
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //passed

assertArraysEqual(["1", "2", "3"], ["1", 2, "3"]); // failed
assertArraysEqual([], ["1", "2", "3"]); // failed

assertArraysEqual([], []); // passed

