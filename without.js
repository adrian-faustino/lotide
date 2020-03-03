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

const assertArraysEqual = function(arr1, arr2) { //arr 2 is expected answer
  if (eqArrays(arr1, arr2)) {
    return console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const without = function(arr, remove) {
  let sourceArr = arr;
  const removeArr = remove;

  for (let i = 0; i < removeArr.length; i++) {
    const removeWord = removeArr[i];
    for (let j = 0; j < sourceArr.length; j++) {
      const sourceWord = sourceArr[j];
      if (sourceWord === removeWord) {
        sourceArr.splice(j, 1);
      }
    }
  }

  return sourceArr;
};

// TEST
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);