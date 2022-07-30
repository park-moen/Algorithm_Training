const fs = require('fs');
const input = Number(fs.readFileSync('input.txt').toString().trim());

let index = 1;
let sum = 0;

while (sum <= input) {
  sum += index;
  index++;
}

console.log(index - 2);
