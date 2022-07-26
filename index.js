const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let temp = input.split('-');

console.log(temp);
