const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  
  if (a === b) {
    return console.log('Assertion Passed: ' + a + ' === ' + b);
  } else {
    return console.log('Assertion Failed: ' + a + ' !== ' + b)
  }
};

// TEST CODE
assertEqual('lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);