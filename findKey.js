const findKey = function(object, callback) {

  for (const key of Object.keys(object)) {
    
    if (callback(object[key])) {
      return key;
    }
  }
};


module.exports = findKey;