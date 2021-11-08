const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input.shift());
const steps = input.map(v => +v);

console.log(n, steps);
