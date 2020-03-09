const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('Returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});