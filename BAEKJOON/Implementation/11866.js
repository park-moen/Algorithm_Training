const fs = require('fs');
const [n, k] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

const queue = Array.from({ length: n }, (_, i) => i + 1);
const result = [];

let count = k - 1;

while (queue.length) {
  const currentValue = queue.shift();

  if (count === 0) {
    result.push(currentValue);
    count = k - 1;
  } else {
    queue.push(currentValue);
    count--;
  }
}

console.log(`<${result.join(', ')}>`);
