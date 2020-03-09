# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adrian_faustino/lotide`

**Require it:**

`const _ = require('@adrian_faustino/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqualTest((...)`:) takes 2 arrays as parameters, actual and expected. Prints assertion message based on if it's true or false.
* `assertEqualTest(...)`: takes 2 primitive parameters, actual and expected. Prints assertion message based on if it's true or false.
* `eqArrays(...)`: takes 2 arrays as parameters. Returns true if the arrays are similar.
* `assertArraysEquals(...)`: takes 2 arrays as parameters, actual and expected. Prints assertion message based on if it's true or false.
* `assertEqual(...)`: takes 2 primitive parameters, actual and expected. Prints assertion message based on if it's true or false.
* `assertObjectsEqual(...)`: takes 2 objects as parameters, actual and expected. Prints assertion messaged based on if it's true or false.
* `countLetters(...)`: takes a string as a parameter. Returns an object that shows how much times each letter appears in the input string,
* `countOnly(...)`: takes 2 arrays as parameters. Returns true if the arrays are similar.
* `countOnly(...)`: takes 2 parameters, a list of strings, and a string. Returns an object that shows how many times a string appeared in the list.
* `eqObjects(...)`: takes 2 objects as parameters. Returns true if the arrays are similar.
* `findKey(...)`: takes an object and a function as parameters. Returns the first key based on the given value.
* `findKeyByValue(...)`: takes an object and a value as parameters. Returns the first key based on the given value. 
* `flatten(...)`: takes an array as parameter. Returns the sum of the array.
* `head(...)`: takes an array as parameter. Returns the first element in the array.
* `letterPositions(...)`: takes a string as a parameter. Returns an object showing how many times each letter appears in the string.
* `map(...)`: takes an array and a callback function as parameters. Modifies each element in the array based on a callback function.
* `middle(...)`: takes an array as parameter. Returns middle element as an array. If the length is equal, returns 2 middle elements in an array.
* `tail(...)`: takes an array as a parameter. Returns everything but the first element in an array.
* `takeUntil(...)`: takes an array and a callback function as parameters. Returns every element in the input array up until the given value. Returns a new array.
* `without(...)`: takes an array and value as parameters. Returns a new array excluding the value.
