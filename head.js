const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
/* Create a function head which returns the first item in the array.
 - head function should not return the first element as an array. 
 - It should simply return the element itself. */

// .slice(0, 1) doesn't work - doesn't return the element itself

// .shift() removes the first element and returns it (not as an array)
const head = function(value1, value2) {
  for (const element of value1) {
    return value1.shift();
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([1]), 5);
assertEqual(head([]), 5);
assertEqual(head([1]), "1");