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

//take in an array containing elements including nested arrays of elements
// returns a "flattened" version of the array

const flatten = function(toFlatten) {
const flattened = [];

for (const value of toFlatten) {  // goes through the array
  let checkIfArray = Array.isArray(value) //checks if it's an array
    if (!checkIfArray) { //if not an array -> push value into flattened []
      flattened.push(value);
    } else { //if array -> goes through the nested array and pushes its values to flattened []
      for (const values of value){
        flattened.push(values);
      }
    }
      }

return flattened;

};
const test1 = [1, 2, [3, 4], 5, [6]]
flatten(test1); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten(test1), [1, 2, 3, 4, 5, 6]);

const test2 = ["I", "liked", ["this"], ["task"], ["a"], "lot"]
flatten(test2);
assertArraysEqual(flatten(test2),(["I", "liked", "this", "task", "a", "lot"]));


