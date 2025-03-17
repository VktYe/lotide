const eqArrays = require('./eqArrays');
// returns true if both obj have identical keys with identical values.
// Otherwise you get back a bif fat false!
const eqObjects = function(obj1, obj2) {

  // checks the length of keys for both objects
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) { //looping through object' key
    // checks if the values of both objects is an Array
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { //if yes - calls eqArray for comparison
      if(!eqArrays((obj1[key]), (obj2[key]))) {  // if value arrays not equal return false
        return false
       } // if equal continues the outer loop
    } else { // else compares primitive values
      if (obj1[key] !== obj2[key]) { // compares the key-value pair in both objects
   
        return false;
     
      }
  
    }
  
  }
  return true;
};


module.exports = eqObjects;