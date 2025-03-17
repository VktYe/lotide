const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


describe('#takeUntil', () => {
  
  it('should return array up to first negative number', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
    
  });

  it('should return array up to comma in string array', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data, x => x === ',');
    assert.deepEqual(result, ["I've", "been", "to", "Hollywood"]);
    
  });

  it('should return array up to specific number', () => {
    const data = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
    const result = takeUntil(data, x => x === 88);
    assert.deepEqual(result, [73, 69, 3, 100, 50, 70, 69]);
    
  });

  it('should return empty array when first element matches condition', () => {
    const data = [-1, -45, 6];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, []);
    
  });

  it('should return full array when no element matches condition', () => {
    const data = [73, 69, 3, 100, 50, 70];
    const result = takeUntil(data, x => x === 71);
    assert.deepEqual(result, [73, 69, 3, 100, 50, 70]);
    
  });

  it('should return empty array when given empty array', () => {
    const data = [];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, []);
    
  });

  it('should handle single element array not matching condition', () => {
    const data = [5];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, [5]);
    
  });

  it('should handle single element array matching condition', () => {
    const data = [-5];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, []);
    
  });
});
