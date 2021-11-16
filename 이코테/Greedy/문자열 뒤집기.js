const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

let zero = 0;
let one = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== input[i + 1]) {
    if (input[i] === '0') zero++;
    else one++;
  }
}

console.log(Math.min(zero, one));
