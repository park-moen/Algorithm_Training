let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(el => Number(el));
let compareArr = input.slice();

if (compareArr.sort((a, b) => a - b).join(' ') === input.join(' ')) {
  console.log('ascending');
} else if (compareArr.sort((a, b) => b - a).join(' ') === input.join(' ')) {
  console.log('descending');
} else {
  console.log('mixed');
}
