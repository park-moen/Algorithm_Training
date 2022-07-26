const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();
// const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  if (input === '0') return 1;

  const splitInput = input.split('').map(input => Number(input));
  const result = input;
  let count = 0;

  if (splitInput.length === 1) {
    splitInput.unshift(0);
  }

  while (true) {
    const firstElement = String(splitInput[splitInput.length - 1]);
    const lastElement = String(splitInput.reduce((acc, cur) => acc + cur, 0));

    input = firstElement + lastElement[lastElement.length - 1];
    splitInput.shift();
    splitInput.push(Number(lastElement[lastElement.length - 1]));
    count++;

    if (input[0] === '0') {
      input = input[1];
    }

    if (input === result) break;
  }

  return count;
}

console.log(solution(input));
