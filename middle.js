// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(array) {
  
  const middleIndex = Math.floor(array.length / 2); // calculating middle index number of the array
  if (array.length <= 2) {
    return [];

  } else if (array.length % 2 === 1) {
    return [array[middleIndex]];

  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;