const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  it("should return 'noma' for '(x) => x.stars === 2'", () => {
    const result = findKey(
      {
        "Blue Hill": { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      (x) => x.stars === 2
    );
    assert.strictEqual(result, "noma");
  });

  it("should return undefined when no key matches the condition", () => {
    const result = findKey(
      {
        Viktoria: { grade: "passed" },
        Alec: { grade: "passed" },
        John: { grade: "passed" },
        Alex: { grade: "passed" },
        Maria: { grade: "passed" },
        Frank: { grade: "passed" },
      },
      (x) => x.grade === "failed"
    );
    assert.strictEqual(result, undefined);
  });

});