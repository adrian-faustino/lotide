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

// TEST
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); // => should FAIL
assertEqual(eqArrays([1 , 2], [1, 2, 3]), false); // => should FAIL


const a = [1, 2, [3, [4]]];
const b = [1, 2, [3, [4]]];
const c = [1, 2, [3, [4, 5]]];

console.log('======');

assertEqual(eqArrays(a, b), true);
assertEqual(eqArrays(c, b), false);