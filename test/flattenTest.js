const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const flatten = require('../flatten');


describe("#flatten", () => {
  
    it('should flatten array with nested number arrays', () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const result = flatten(input);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });

    it('should flatten array with nested string arrays', () => {
    const input = ["I", "liked", ["this"], ["task"], ["a"], "lot"];
    const result = flatten(input);
    assert.deepEqual(result, ["I", "liked", "this", "task", "a", "lot"]);
  });

   it('should handle empty array', () => {
    const input = [];
    const result = flatten(input);
    assert.deepEqual(result, []);
  });

    it('should handle array with no nesting', () => {
    const input = ["a", "b", "c"];
    const result = flatten(input);
    assert.deepEqual(result, ["a", "b", "c"]);
  });
});
