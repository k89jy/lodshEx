// Load the full build.
var _ = require("lodash");

function firstOutput() {
  let range_arr = _.range(0, 100, 1);
  let sum = _.sum(range_arr);
  return sum;
}

function secondOutput() {
  let range_arr = _.range(0, 200, 1);
  let total = _.sum(range_arr);
  return total;
}

console.log(firstOutput());
console.log(secondOutput());
// expected result sum: 100, total: 0
// result sum: 0 , total: 100
