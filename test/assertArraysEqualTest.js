const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// TEST
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
assertArraysEqual(eqArrays([1, 2, 3], [1, 3]), false);