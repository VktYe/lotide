const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  // scans the object and returns the first key for which callback returns truthy
  // if no key find, return undefined
  // going over  the keys ob object
  for (const key of Object.keys(object)) {
    
    if (callback(object[key])) {
      return key;
    }
  }
};


assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
), "noma"); // => "noma"


assertEqual(findKey(
  {
    Viktoria: { grade: "passed" },
    Alec: { grade: "passed" },
    John: { grade: "passed" },
    Alex: { grade: "passed" },
    Maria: { grade: "passed" },
    Frank: { grade: "passed" },
  },
  (x) => x.grade === "failed"
), undefined);