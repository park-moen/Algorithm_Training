const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(v => +v));
const [N, K] = input.shift();
const weigthAndCost = input.splice(0, N).sort((a, b) => b[1] - a[1]);
const maxBagWeight = input.map(v => v[0]).sort((a, b) => a - b);

console.log(N, K);
console.log(weigthAndCost, maxBagWeight);
