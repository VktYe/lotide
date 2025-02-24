const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

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


// Use assertEqual to write test cases for various scenarios.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", 2, "3"]), false); // => true
assertEqual(eqArrays(["1", "2", "3"], ["", "2", "3"]), true); // => should fail - tests assertionEqual function
assertEqual(eqArrays([], ["1", "2", "3"]), true); // => should fail - tests assertionEqual function

