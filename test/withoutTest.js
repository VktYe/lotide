
const assert = require('chai').assert;
const without = require('../without');
describe('#without', () => {
  
  it('should remove number from number array', () => {
    const result = without([1, 2, 3], [1]);
    assert.deepEqual(result, [2, 3]);
  });

  it('should remove items from mixed type array', () => {
    const result = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(result, ["1", "2"]);
  });

  it('should remove string from string array', () => {
    const result = without(["hello", "world", "lighthouse"], ["lighthouse"]);
    assert.deepEqual(result, ["hello", "world"]);
  });

  it('should remove different string from same array', () => {
    const result = without(["hello", "world", "lighthouse"], ["world"]);
    assert.deepEqual(result, ["hello", "lighthouse"]);
  });

  it('should return original array when no items match', () => {
    const result = without(["hello", "world", "lighthouse"], ["Viktoria"]);
    assert.deepEqual(result, ["hello", "world", "lighthouse"]);
  });

  it('should return empty array when all items are removed', () => {
    const result = without([1, 2], [1, 2]);
    assert.deepEqual(result, []);
  });

  it('should return emapty array for empty source array', () => {
    const result = without([], [1, 2, 3]);
    assert.deepEqual(result, []);
  });

  it('should not modify original array', () => {
    const original = ["hello", "world", "lighthouse"];
    const result = without(original, ["world"]);
    assert.deepEqual(result, ["hello", "lighthouse"]);
    assert.deepEqual(original, ["hello", "world", "lighthouse"]);
  });
});
