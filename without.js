const without = function(source, itemsToRemove) { //loops through source elements
  const newSource = []; //new array in which we going to push elements

  //outer loop
  for (let i = 0; i < source.length; i++) { //loops through source elements
    let shouldPush = true;

    //inner loop
    for (let j = 0; j < itemsToRemove.length; j++) { //loops through itemsToRemove
      if (source[i] === itemsToRemove[j]) { //when finds matches, should sets to false
        shouldPush = false;
        break; //break inner loop after that
      }
    }
    if (shouldPush) { //while shouldPush is true pushes source[i] to newSource
      newSource.push(source[i]);
  
    }
  }
  
  return newSource;
};



module.exports = without;