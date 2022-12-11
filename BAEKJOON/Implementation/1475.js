const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('');

let array = new Array(10).fill(0);

for (let i of input) {
  array[i] += 1;
}

array[6] =
  (array[6] + array[9]) % 2 === 0
    ? (array[6] + array[9]) / 2
    : Math.floor((array[6] + array[9]) / 2) + 1;
array[9] = 0;

console.log(Math.max(...array));
