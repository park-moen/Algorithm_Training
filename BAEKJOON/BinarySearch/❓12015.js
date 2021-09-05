const fs = require('fs');
const [n, ...arr] = fs.readFileSync('input.txt').toString().trim().split(/\s+/);

const sequence = arr.map(num => Number(num));
