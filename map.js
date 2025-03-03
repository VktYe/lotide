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

const words = ["ground", "control", "to", "major", "tom"];
const animals = ["cat", "dog", "", "mouse"];
const numbers = [123, 456];
const stringAndNum = ["one", "two", 3, "four"];
const nullAsValue = ["123", null, "789", "-56"];

// map takes in two arguments:
// - an array
// - a callback function
// - returns new array based on the result of the callback fn

const map = function(array, callbackFn) {
  const newArray = [];
  for (let item of array) {
    newArray.push(callbackFn(item));
  }
  return newArray;
};
const results = map(words, (word) => word[0]);
console.log("Result 1: ", results);
assertArraysEqual(results, [ 'g', 'c', 't', 'm', 't' ]);

//Test case if one of the values is an empty string
const results2 = map(animals, (animal) => animal[0]);
console.log("Result 2: ", results2);
assertArraysEqual(results2, [ 'c', 'd', undefined, 'm' ]);

//Test case if the values are numbers
const results3 = map(numbers, (number) => number[0]);
console.log("Result 3: ", results3);
assertArraysEqual(results3, [ undefined, undefined ]);

// Test case if one of the values is number and others string
const results4 = map(stringAndNum, (value) => value[0]);
console.log("Result 4: ", results4);
assertArraysEqual(results4, [ 'o', 't', undefined, 'f' ]);

// test case if one of the values null - 
const results5 = map(nullAsValue, (value) => value[0]); //TypeError: Cannot read properties of null
console.log("Result 5: ", results5);
assertArraysEqual(results5, [ '1', '4', '7', '-' ]);
