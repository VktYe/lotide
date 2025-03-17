const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const result = {};
  
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
      result[letter] = 1;
    }
    }
  
  }
  
  return result;

};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1['l'], 1);
const result2 = countLetters("lighthouse in the house");
assertEqual(result2['e'], 3);

const result3 = countLetters("lighthouse in the house");
assertEqual(result3['m'], undefined);

const result4 = countLetters("I do not like the weather today");
assertEqual(result4['t'], 4);

module.exports = countLetters;







