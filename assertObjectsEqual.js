
const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;
 