// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(array) {
  const middleOfArray = [];
  const middle = Math.floor(array.length / 2); // calculating middle index number of the array
  if (array.length <= 2) {  // if less than 2, returns empty array
    return [];
  } else if (array.length % 2 === 1) {  // if more than 2, but odd => pushes middle element of the array to middleOfArray
    middleOfArray.push(array[middle]);
  } else { // if more than 2, but even = pushes 2 middle elements
    middleOfArray.push(array[middle - 1]);
    middleOfArray.push(array[middle]);
  }

  return middleOfArray;
};


module.exports = middle;