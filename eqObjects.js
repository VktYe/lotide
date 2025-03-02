const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// returns true if both obj have identical keys with identical values.
// Otherwise you get back a bif fat false!
const eqObjects = function(obj1, obj2) {

  // checks the length of keys for both objects
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) { //looping through object' key
    if (obj1[key] !== obj2[key]) { // compares the key-value pair in both objects
   
      return false;
    }
  
  // console.log('key:', key, "obj1[key]:", obj1[key], 'obj2[key]:', obj2[key])
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const shirtObject1 = { color: "red", size: "small" };
const anotherShirtObject = { size: "medium", color: "red"};
const anotherShirtObject1 = { size: "medium", colour: "red"};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject1, anotherShirtObject), false); //
assertEqual(eqObjects(anotherShirtObject, anotherShirtObject1), false); // false because color key is not identical
const longSleeveShirtobject = { size: "medium", color: "red", sleeveLength: "long"};

assertEqual(eqObjects(shirtObject, longSleeveShirtobject), false);
