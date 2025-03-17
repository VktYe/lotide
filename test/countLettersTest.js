const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe("#countLetters", () => {

  it("should return the 1 for the letter 'l'", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result['l'], 1);
  });

  it("should return the 3 for the letter 'e'", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result['e'], 3);
  });

  it("should return undefined for a letter that doesn't exist", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result['m'], undefined);
  });

  it("should return 4 for the letter 't'", () => {
    const result = countLetters("I do not like the weather today");
    assert.strictEqual(result['t'], 4);
  });

});
