const fs = require('fs');
let [h, m] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

if (h * 60 + m < 45) {
  h = 24;
}

const totalTime = h * 60 + m - 45;

h = parseInt(totalTime / 60, 10);
m = totalTime % 60;
console.log(h, m);
