// this code asserts if two arrays are equal

const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) { // going over indexes to find where to stop and slice
    if (callback(array[i])) { // if callback returns true
      return array.slice(0, i); // return sliced array from the begining till this index
    }

  }
  return array;
  
};



module.exports = takeUntil;