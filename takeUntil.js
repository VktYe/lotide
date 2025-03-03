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

//takes in two parrameters:
// - array
// - callback (predicate)
// - the callback should be provided only one value: the item in the array
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) { // going over indexes to find where to stop and slice
    if (callback(array[i])) { // if callback returns true
      return array.slice(0, i); // return sliced array from the begining till this index
    }

  }
  return array;
  
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", "been", "to", "Hollywood" ]);


console.log('---');

const data3 = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const results3 = takeUntil(data3, x => x === 88);
assertArraysEqual(results3, [73, 69, 3, 100, 50, 70, 69]);

console.log('---');

const data4 = [ -1, -45, 6];
const results4 = takeUntil(data4, x => x < 0);
assertArraysEqual(results4, []);

console.log('---');

const data5 = [73, 69, 3, 100, 50, 70];
const results5 = takeUntil(data5, x => x === 71);
assertArraysEqual(results5, [73, 69, 3, 100, 50, 70]);


