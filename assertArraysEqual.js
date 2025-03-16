const eqArrays = require("./eqArrays");

// This function compares two arrays for equality and logs a message indicating whether they are equal or not.
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


module.exports = assertArraysEqual;

