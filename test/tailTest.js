const tail = require('../tail');
const assertEqual = require('../assertEqual');

tail([1 , 2]);
tail([1, 2, 3, 4]);
tail(['Hello', 'World']);
tail(['My', 'name', 'is']);

assertEqual(tail([1, 2]), 2);