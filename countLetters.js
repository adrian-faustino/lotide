const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  
  if (a === b) {
    return console.log(`Assertion Passed: [${a}] === [${b}]`);
  } else {
    return console.log(`Assertion Failed: [${a}] !== [${b}]`);
  }
};

//====================

const countLetters = function(string) {
  //create letterCount object
  let letterCount = {};
  for (letter of string) {
    letterCount[letter] = 0;
  }
  
  for (letter of string) {
    letterCount[letter] += 1;
  }
  return letterCount;
};

console.log(countLetters('LHL'));
console.log(countLetters('aabbbc'));