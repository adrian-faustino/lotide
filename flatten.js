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

const flatten = function(arr) {
  let newArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        newArr.push(element[i]);
      }
    } else {
      newArr.push(element);
    }
  });

  return newArr;
};

const a = [1, 2, [3, 4], 5, [6]];

//TEST
assertArraysEqual(flatten(a), [1, 2, 3, 4, 5, 6]);