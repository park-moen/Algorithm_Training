const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let zeroCount = input.split('1').filter(v => v.includes('0')).length;
let oneCount = input.split('0').filter(v => v.includes('1')).length;

console.log(Math.min(zeroCount, oneCount));
