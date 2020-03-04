const letterPositions = function(sentence) {
  const inputString = sentence;
  const results = {};
  // logic to update results here
  for (let letter of inputString) {
    results[letter] = [];
  }

  for (let i = 0; i < inputString.length; i++) {
    const currentLetter = inputString[i];
    results[currentLetter].push(i);
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));
