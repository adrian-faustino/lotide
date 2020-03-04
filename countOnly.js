const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  
  if (a === b) {
    return console.log(`Assertion Passed: [${a}] === [${b}]`);
  } else {
    return console.log(`Assertion Failed: [${a}] !== [${b}]`);
  }
};

//====================================

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const newObj = {};
  let count = 0
  for (element of allItems) {
    console.log(element);
    count++;
  }
  console.log(`Total count: ${count}`);

  //count only Salima
  let salimaCount = 0;
  for (element of allItems) {
    if (element === 'Salima') {
      salimaCount++;
    }
  }
  console.log(`Salima count: ${salimaCount}`);

  return newObj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);