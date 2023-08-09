const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let [h, m] = input[0].split(' ').map(Number);
let cookTime = +input[1];

m += cookTime;

while (m >= 60) {
  h += 1;
  m -= 60;
}

h %= 24;

console.log(h, m);

// reference: https://kyportfolio.tistory.com/49
