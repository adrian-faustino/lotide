const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  
  if (a === b) {
    return console.log(`Assertion Passed: [${a}] === [${b}]`);
  } else {
    return console.log(`Assertion Failed: [${a}] !== [${b}]`);
  }
};

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
    return false;;
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

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false