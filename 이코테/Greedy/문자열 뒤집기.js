const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

let zero = 0;
let one = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== input[i + 1]) {
    if (input[i] === '0') zero++;
    else one++;
  }
}

console.log(Math.min(zero, one));

// 다른 방벙으로 풀이

const fs = require('fs');
const input2 = fs.readFileSync('input.txt').toString().trim();

function solution(string) {
  const zeroArray = [];
  const oneArray = [];
  const array = string.split('');

  while (true) {
    const firstString = array[0];

    if (firstString === '0') {
      const differentNumberIndex = array.findIndex(v => v !== firstString);

      if (differentNumberIndex === -1) break;

      zeroArray.push(array.splice(0, differentNumberIndex).join(''));
    } else {
      const differentNumberIndex = array.findIndex(v => v !== firstString);

      if (differentNumberIndex === -1) break;

      oneArray.push(array.splice(0, differentNumberIndex).join(''));
    }
  }

  if (array[0] === '0') {
    zeroArray.push(array.join(''));
  } else {
    oneArray.push(array.join(''));
  }

  return Math.min(zeroArray.length, oneArray.length);
}
