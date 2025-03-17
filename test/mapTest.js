const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {

  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, (word) => word[0]);
    console.log("Result 1: ", results);
    assert.deepEqual(results, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns [ 'c', 'd', undefined, 'm' ] for ['cat', 'dog', '', 'mouse']", () => {
    const animals = ['cat', 'dog', '', 'mouse'];
    const results2 = map(animals, (animal) => animal[0]);
    console.log("Result 2: ", results2);
    assert.deepEqual(results2, [ 'c', 'd', undefined, 'm' ]);
  });

  it("should return undefined for numbers when accessing the first letter", () => {
    const numbers = [123, 456];
    const results3 = map(numbers, (number) => number[0]);
    console.log("Result 3: from", numbers, "to ", results3);
    assert.deepEqual(results3, [ undefined, undefined ]);
  });

  it("should map mixed array (strings and numbers) to the first letter", () => {
    const stringAndNum = ['one', 'two', 3, 'four'];
    const results4 = map(stringAndNum, (value) => value[0]);
    console.log("Result 4: from", stringAndNum, "to ", results4);
    assert.deepEqual(results4, [ 'o', 't', undefined, 'f' ]);
  });

  it("for null returns undefined", () => {
    const nullAsValue = ['123', null, '789', '-56'];
    const results5 = map(nullAsValue, (value) => value[0]);
    console.log("Result 5: ", results5);
    assert.deepEqual(results5, [ '1', undefined, '7', '-' ]);
  });

});