const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  
  if (a === b) {
    return console.log(`Assertion Passed: [${a}] === [${b}]`);
  } else {
    return console.log(`Assertion Failed: [${a}] !== [${b}]`);
  }
};

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = function(arr1, arr2) {
  let result;
  let recursionResult;

  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let index in arr1) {
    if (Array.isArray(arr1[index])) {
      recursionResult = eqArrays(arr1[index], arr2[index]);
    } else if (arr1[index] === arr2[index]) {
      result = true;
    } else {
      result = false;
    }
  }

  if (recursionResult === undefined) {
    return result;
  } else {
    return recursionResult;
  }
};

module.exports = eqArrays;