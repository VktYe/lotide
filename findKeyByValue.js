const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//finKeyByValue:
// - takes an obj and a value
// - scan the object for given value
// - returns key with the same value or if not - undefined
const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      
      return key;
    }
  
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // assertion Passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //Passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "")), undefined; // Passed

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // Passed
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined); // Passed