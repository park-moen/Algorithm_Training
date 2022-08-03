const fs = require('fs');
let [beforeNumber, afterNumber] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

let count = 1;

while (beforeNumber !== afterNumber) {
  if (
    beforeNumber > afterNumber ||
    (afterNumber % 2 !== 0 && afterNumber % 10 !== 1)
  ) {
    count = -1;
    break;
  } else if (afterNumber % 2 === 0) {
    afterNumber /= 2;
    count++;
  } else if (afterNumber % 10 === 1) {
    afterNumber = Math.floor(afterNumber / 10);
    count++;
  }
}

console.log(count);
