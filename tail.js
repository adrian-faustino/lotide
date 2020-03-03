const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  a = a.toString();
  b = b.toString();
  
  if (a === b) {
    return console.log(`Assertion Passed: [${a}] === [${b}]`);
  } else {
    return console.log(`Assertion Failed: [${a}] !== [${b}]`);
  }
};

const tail = function(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  } else if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  console.log(newArr);
  return newArr;
};

tail([1 , 2]);
tail([1, 2, 3, 4]);
tail(['Hello', 'World']);
tail(['My', 'name', 'is']);

assertEqual(tail([1, 2]), 2);