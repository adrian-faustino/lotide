const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

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