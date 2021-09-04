const fs = require('fs');
const [n, c, ...arr] = fs.readFileSync('input.txt').toString().split(/\s+/);
const coord = arr.map(val => +val);
