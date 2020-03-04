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

const eqObjects = function(obj1, obj2) {
  const obj1_KEYS = Object.keys(obj1); // this is an array of keys
  const obj2_KEYS = Object.keys(obj2);

  if (obj1_KEYS.length !== obj2_KEYS.length) { //compare lengths
    return false;
  }

  for (let key of obj1_KEYS) {
    const value_1 = obj1[key]; //this is the value of each key
    const value_2 = obj2[key];

    if (Array.isArray(value_1) && Array.isArray(value_2)) { //if both are arrays, use eqArrays
      if (!eqArrays(value_1, value_2)) {
        return false;
      }
    } else if (value_1 !== value_2) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return console.log(`Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    return console.log(`Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const objA = {a: '2'};
const objB = {a: '2'};
const objC = {c: [2]};

assertObjectsEqual(objA, objB); //true
assertObjectsEqual(objB, objC); //false