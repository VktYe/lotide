const flatten = function(toFlatten) {
  const flattened = [];

  for (const value of toFlatten) {  // goes through the array
    if (!Array.isArray(value)) { //if not an array -> push value into flattened []
      flattened.push(value);
    } else { //if array -> goes through the nested array and pushes its values to flattened []
      for (const values of value) {
        flattened.push(values);
      }
    }
  }

  return flattened;

};

module.exports = flatten;

