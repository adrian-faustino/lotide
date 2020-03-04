const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const letterPositions = function(sentence) {
  const inputString = sentence;
  const results = {};
  // logic to update results here
  for (let letter of inputString) {
    if (letter !== ' ') {
      results[letter] = [];
    }
  }

  for (let i = 0; i < inputString.length; i++) {
    const currentLetter = inputString[i];
    if (currentLetter !== ' ') {
      results[currentLetter].push(i);
    }
  }
  return results;
};

// TEST
const testString = 'lighthouse in the house';
const testObj = letterPositions(testString);
for (let i = 0; i < testString.length; i++) {
  const currentLetter = testString[i];
  if (currentLetter !== ' ') {
    const currentKey = testObj[currentLetter];
    if (currentKey.length < 2) {
      assertArraysEqual(currentKey, [i]);
    }
  }
}
assertArraysEqual(testObj.h, [3, 5, 15, 18]);
