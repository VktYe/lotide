
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

const eqObjects = function(obj1, obj2) {

  // checks the length of keys for both objects
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) { //looping through object' key
    // checks if the values of both objects is an Array
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { //if yes - calls eqArray for comparison
      if (!eqArrays((obj1[key]), (obj2[key]))) {  // if value arrays not equal return false
        return false;
      } // if equal continues the outer loop
    } else { // else compares primitive values
      if (obj1[key] !== obj2[key]) { // compares the key-value pair in both objects
   
        return false;
     
      }
  
    }
  
  }
  return true;
};

// asserts if two objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; //
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"]};
const shirtObject = { color: "red", size: "medium" };
const shirtObject1 = { color: "red", size: "small" };

const anotherShirtObject = { size: "medium", color: "red"};

const anotherShirtObject2 = { size: [], colour: "red"};
const anotherShirtObject3 = { size: ["medium"], colour: "red"};


assertObjectsEqual(shirtObject, { color: "red", size: "medium" }); // passed
assertObjectsEqual(shirtObject, shirtObject1);  // failed
assertObjectsEqual(anotherShirtObject2, { size: [], colour: "red"}); // passed
assertObjectsEqual(multiColorShirtObject, { size: "medium", colors: ["red", "blue"]}); // passed
assertObjectsEqual(anotherShirtObject, { color: "red", size: "medium" }); // passed
assertObjectsEqual({ size: "medium", colour: "red"}, anotherShirtObject3); // failed
assertObjectsEqual(anotherMultiColorShirtObject, { size: "medium", colors: ["red", "blue"]}); // passed
 