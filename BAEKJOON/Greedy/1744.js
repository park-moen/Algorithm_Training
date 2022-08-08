const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = input.shift();
const numbers = input.map(v => +v);
const negative = [];
const positive = [];

let result = 0;

for (let i = 0; i < N; i++) {
  if (numbers[i] < 1) {
    negative.push(numbers[i]);
  } else if (numbers[i] > 1) {
    positive.push(numbers[i]);
  } else {
    result += numbers[i];
  }
}

negative.sort((a, b) => a - b);
positive.sort((a, b) => b - a);

for (let i = 0; i < negative.length; i += 2) {
  if (i + 1 < negative.length) {
    result += negative[i] * negative[i + 1];
  } else {
    result += negative[i];
  }
}

for (let i = 0; i < positive.length; i += 2) {
  if (i + 1 < positive.length) {
    result += positive[i] * positive[i + 1];
  } else {
    result += positive[i];
  }
}

console.log(result);
