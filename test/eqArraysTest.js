const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true for 2 identical arrays with numbers [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for 2 not identical arrays with numbers [1, 2, 3] and [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true for 2 not identical arrays with strings ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false for comparing string to number ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns true for 2 empty arrays", () => {
    assert.deepEqual(eqArrays([], []), true);
  });


});
