const fs = require('fs');

let n = Number(fs.readFileSync('input.txt').toString().trim());
let result = 0;

while (n) {
  if (n < 3) {
    result = 1;
    break;
  }

  if (n % 5 === 0) {
    result += n / 5;
    n %= 5;
  } else {
    n -= 3;
    result += 1;
  }
}

console.log(result);
