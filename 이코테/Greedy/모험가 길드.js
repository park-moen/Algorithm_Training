const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input.shift());
const data = input[0].split(' ').map(v => +v);

data.sort();

let res = 0;
let count = 0;

for (let val of data) {
  count++;

  if (count >= val) {
    res++;
    count = 0;
  }
}

console.log(res);
