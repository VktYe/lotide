const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

// returns true if both obj have identical keys with identical values.
// Otherwise you get back a bif fat false!
const eqObjects = function(obj1, obj2) {

  // checks the length of keys for both objects
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) { //looping through object' key
    // checks if the values of both objects is an Array
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { //if yes - calls eqArray for comparison
      if(!eqArrays((obj1[key]), (obj2[key]))) {  // if value arrays not equal return false
        return false
       } // if equal continues the outer loop
    } else { // else compares primitive values
      if (obj1[key] !== obj2[key]) { // compares the key-value pair in both objects
   
        return false;
     
      }
  
    }
  
  // console.log('key:', key, "obj1[key]:", obj1[key], 'obj2[key]:', obj2[key])
  }
  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"]};
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // true

const shirtObject = { color: "red", size: "medium" };
const shirtObject1 = { color: "red", size: "small" };
const shirtObject2 = { color: ["red"], size: "small" };
const anotherShirtObject = { size: "medium", color: "red"};
const anotherShirtObject1 = { size: "medium", colour: "red"};
const anotherShirtObject2 = { size: [], colour: "red"};
const anotherShirtObject3 = { size: ["medium"], colour: "red"};

assertEqual(eqObjects(shirtObject, shirtObject2), false);
assertEqual(eqObjects(anotherShirtObject2, anotherShirtObject3), false)

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject1, anotherShirtObject), false); //
assertEqual(eqObjects(anotherShirtObject, anotherShirtObject1), false); // false because color key is not identical
const longSleeveShirtobject = { size: "medium", color: "red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtobject), false);
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false