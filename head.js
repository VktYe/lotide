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

const head = function(array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([1]), 5); // should faild
assertEqual(head([]), 5); // should faild
assertEqual(head([1]), "1"); // should faild