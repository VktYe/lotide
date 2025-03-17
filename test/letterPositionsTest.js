const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {
  it("returns [3, 5, 15, 18] for 'h' in 'lighthouse in the house' ", ()  => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });

  it("returns [1] for 'e' in 'lello' ", ()  => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [14, 15] for 'n' in 'this cat is funny' ", ()  => {
    assert.deepEqual(letterPositions("this cat is funny").n, [14, 15]);
  });

  it("returns undefined for empty string", () => {
    assert.deepEqual(letterPositions("").h, undefined);
  })

  it("returns undefined for number", () => {
    assert.deepEqual(letterPositions(584).h, undefined);
  })
});
