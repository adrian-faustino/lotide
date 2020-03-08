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

// const eqObjects = function(obj1, obj2) {
//   const obj1_KEYS = Object.keys(obj1); // this is an array of keys
//   const obj2_KEYS = Object.keys(obj2);

//   if (obj1_KEYS.length !== obj2_KEYS.length) { //compare lengths
//     return false;
//   }

//   for (let key of obj1_KEYS) {
//     if (typeof obj1[key] )
//     const value_1 = obj1[key]; //this is the value of each key
//     const value_2 = obj2[key];

//     if (Array.isArray(value_1) && Array.isArray(value_2)) { //if both are arrays, use eqArrays
//       if (!eqArrays(value_1, value_2)) {
//         return false;
//       }
//     } else if (value_1 !== value_2) {
//       return false;
//     }
//   }

//   return true;
// };

// const eqObjects2 = function(obj1, obj2) {
//   const obj1_KEYS = Object.keys(obj1); // this is an array of keys
//   const obj2_KEYS = Object.keys(obj2);
//   console.log(typeof obj1);

//   if (obj1_KEYS.length !== obj2_KEYS.length) { //compare lengths
//     return false;
//   }

//   for (let key in obj1) {
//     if (typeof obj1[key] === 'object') {
//       eqObjects2(key, obj2[key]);
//     } else if (obj1[key] === obj2[key]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// const eqObjects = function(obj1, obj2) {
//   //compare number of keys in an object
//   console.log(Object.keys(obj1).length + ' -> obj 1 length **' + Object.keys(obj2).length + ' -> Object 2 length');
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }

//   for (let key in obj1) {
//     console.log(key);
//     if (typeof obj1[key] === 'object') {
//       console.log('recursion!');
//       eqObjects(obj1[key], obj2[key]);
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     } 
//   }
  
//   // return true;
// };

const eqObjects = function(obj1, obj2) {
  const obj1_KEYS = Object.keys(obj1);
  const obj2_KEYS = Object.keys(obj2);

  let result;
  let recursionResult;
  if (obj1_KEYS.length !== obj2_KEYS.length) {
    return false;
  }

  for (let key in obj1) {
    if (typeof obj1[key] === 'object') {
      recursionResult = eqObjects(obj1[key], obj2[key]);
    } else if (obj1[key] === obj2[key]) {
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

console.log('=====');

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
