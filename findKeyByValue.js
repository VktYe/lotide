const findKeyByValue = function(object, value) {
// Loop through the keys of the object
  for (const key of Object.keys(object)) {
    // If the current key's value matches the input value, return the key
    if (object[key] === value) {
      return key;
    }
  
  }
};


module.exports = findKeyByValue;