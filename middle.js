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

const middleIndex = function(num) {
  return Math.floor(num / 2);
};

const isEven = function(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const middle = function(arr) {
  const length = arr.length;
  const index = middleIndex(length);
  let middleElements = [];

  if (length <= 2) {
    return middleElements;
  }

  if (isEven(length)) {
    middleElements.push(arr[index - 1]);
    middleElements.push(arr[index]);
  } else {
    middleElements.push(arr[index]);
  }

  return middleElements;
};

module.exports = middle;
