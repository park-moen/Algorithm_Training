const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let result = [];

for (const val of input[1]) {
  result.push(input[0] * val);
}

result = result.reverse();
result.push(input[0] * input[1]);

console.log(result.join('\n'));
