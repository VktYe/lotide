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
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  // console.log('obj1 keys: ', Object.keys(obj1), 'obj2 keys: ', Object.keys(obj2));
  // console.log(typeof Object.keys(obj1));
  // for (const key of obj1Keys) {
  //   // console.log(key1); 
  //   if (!(obj1Keys[key]===obj2Keys[key])) {
  //     return false
    // }
  
  // console.log('Obj1 keys: ', obj1Keys[key], 'Obj2 keys: ', obj2Keys[key]);
 if (Object.keys(obj1).length === Object.keys(obj2).length) {
  return true;
 }
  return false;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red"};
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); 

const longSleeveShirtobject = { size: "medium", color: "red", sleeveLength: "long"};
eqObjects(shirtObject, longSleeveShirtobject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtobject), false); 