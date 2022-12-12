const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .reduce((acc, cur) => acc + Number(cur), 0);

console.log(input);
