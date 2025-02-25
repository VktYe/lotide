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

// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(array) {
  const middleOfArray = [];
  const middle = Math.floor(array.length / 2); // calculating middle index number of the array


  if (array.length <= 2) {  // if less than 2, returns empty array
    return [];
  } else if (array.length % 2 === 1) {  // if more than 2, but odd => pushes middle element of the array to middleOfArray
    middleOfArray.push(array[middle]);
  } else { // if more than 2, but even = pushes 2 middle elements
    middleOfArray.push(array[middle - 1]);
    middleOfArray.push(array[middle]);
  }
  // console.log('Array length:', array.length, 'Middle index:', middle, "Middle element:", middleOfArray);
  return middleOfArray;

};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([10, 20, 30, 40, 50, 60])); // => [30, 40]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([10, 20, 30, 40, 50, 60]), [30, 40]);