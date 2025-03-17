
const letterPositions = function(sentence) {
  const result = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const currentLetter = sentence[i];
      
      if (!result[currentLetter]) { // if the letter key is not in result {}
        result[currentLetter] = [i]; // create a new letter key with it's current index number
      } else { // if key letter already exists
        result[currentLetter].push(i); // push current index to this key letter
      }
    }
  }
  
  return result;
};


module.exports = letterPositions;