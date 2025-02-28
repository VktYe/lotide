const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(lettersToCount) {
  const result = {};
  
  for (const letters of lettersToCount) {
    // console.log(letters);
    
    
    if (letters !== " ") {
        result[letters] = 0; {
          for (let i = 0; i < lettersToCount.length; i++) {
            if (letters === lettersToCount[i]) {
              result[letters] += 1;
            }
          }
        }
        }
    }
  

  return result;

  
};


countLetters("lighthouse in the house");// { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
// // assertEqual((countLetters("lighthouse in the house")), result1); 

countLetters("I do not like the weather today");// const result2 = { I: 1, d: 2, i: 2, t: 4, h: 1, s: 3, a: 2, k: 1, o: 2, f: 1 };
// assertEqual(countLetters("I do not like the weather today"), result2);












