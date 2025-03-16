const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Use assertEqual to write test cases for various scenarios.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Assertion Passed: true === true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Assertion Passed: false === false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Assertion Passed: true === true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Assertion Passed: false === false

assertEqual(eqArrays(["1", "2", "3"], ["1", 2, "3"]), false); // Assertion Passed: false === false
assertEqual(eqArrays(["1", "2", "3"], ["", "2", "3"]), false); // Assertion Passed: false === falsefail - tests assertionEqual function
assertEqual(eqArrays([], ["1", "2", "3"]), false); // Assertion Passed: false === false