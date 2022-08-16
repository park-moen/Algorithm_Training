const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

const array = input.map(item => item.split(' ').map(v => +v));

let result = '';

for (let i = 0; i < array.length; i += 2) {
  const queue = array[i + 1];

  let location = array[i][1];
  let count = 0;

  while (true) {
    const max = Math.max(...queue);
    const currentValue = queue.shift();

    if (max === currentValue) {
      count++;

      if (location === 0) {
        result += count + '\n';
        break;
      }
    } else {
      queue.push(currentValue);
    }

    if (location === 0) {
      location = queue.length - 1;
    } else {
      location--;
    }
  }
}

console.log(result);
