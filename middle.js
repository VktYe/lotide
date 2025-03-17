// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(array) {
  const middleOfArray = [];
  const middleIndex = Math.floor(array.length / 2); // calculating middle index number of the array
  if (array.length <= 2) {
    return [];

  } else if (array.length % 2 === 1) {
    middleOfArray.push(array[middleIndex]);

  } else {
    middleOfArray.push(array[middleIndex - 1]);
    middleOfArray.push(array[middleIndex]);
  }

  return middleOfArray;
};


module.exports = middle;