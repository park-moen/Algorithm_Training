const fs = require('fs');
const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);
const allChessPiece = [1, 1, 2, 2, 2, 8];
const result = [];

allChessPiece.forEach((piece, i) => {
  result.push(piece - input[i]);
});

console.log(result.join(' '));
