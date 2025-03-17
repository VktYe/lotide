const map = function(array, callbackFn) {
  const newArray = [];
  for (let item of array) {
    if (item === null) {
      newArray.push(undefined);
    } else {
    newArray.push(callbackFn(item));
  }
}
  return newArray;
};

module.exports = map;
