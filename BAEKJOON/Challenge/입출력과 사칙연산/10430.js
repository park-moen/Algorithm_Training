const fs = require('fs');
const [A, B, C] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);
const result = [];

result.push((A + B) % C);
result.push(((A % C) + (B % C)) % C);
result.push((A * B) % C);
result.push(((A % C) * (B % C)) % C);

console.log(result.join('\n'));
