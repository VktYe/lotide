const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function should not modify an array. Should return a new array
const tail = function(array) {
  // returns tail of an array;
  return array.slice(1);

};

// Test Case 1: Check the return array element
const result = tail(["Hello", "Lighthouse", "Labs"]); // Testing that the tail function correctly removes the first element and returns the rest of the array
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


// Test Case 3: An array with one element
const case3 = tail([5]);
assertEqual(case3.length, 0); // ensures there is an empty array

// Test Case 4: An empty array

const case4 = tail([]);
assertEqual(case4.length, 0); // should yield an empty array for its tail



