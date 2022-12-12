const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
const first = parseInt(input[0], 10);
const last = parseInt(input[1], 10);

console.log(first / last);
