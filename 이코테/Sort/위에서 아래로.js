const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.map(v => +v);

// arr.sort().reverse();
arr.sort((a, b) => b - a);

const result = arr.join(' ');

console.log(result);
