const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns true for two identical objects", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)
  });

  it("returns false if objects are not identical", () => {
    assert.strictEqual(eqObjects(shirtObject, shirtObject2), false)
  });

  it("returns false with similar objects but one of the values is an array", () => {
    assert.strictEqual(eqObjects(shirtObject1, shirtObject2), false)
  });

})
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"]};
const shirtObject = { color: "red", size: "medium" };
const shirtObject1 = { color: "red", size: "small" };
const shirtObject2 = { color: ["red"], size: "small" };




