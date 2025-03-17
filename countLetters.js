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


console.log(countLetters("lighthouse in the house"));

assertEqual(String(countLetters("lighthouse in the house")), String({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }));

console.log(countLetters("I do not like the weather today"));
const result2 = String({ I: 1, d: 2, i: 2, t: 4, h: 1, s: 3, a: 2, k: 1, o: 2, f: 1 });
assertEqual(String(countLetters("I do not like the weather today")), result2);

module.exports = countLetters;







