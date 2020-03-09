const assertEqual = require(`./assertEqual`);

const head = function(arr) {
  if (arr.length <= 0) {
    return;
  }
  let head = arr[0];
  return head;
};

module.exports = head;