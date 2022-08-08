const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

let [N, M] = input.shift().split(' ');

const lineArray = [];
const eachLineArray = [];

for (let i = 0; i < M; i++) {
  const [packageLine, eachLine] = input[i].split(' ').map(v => +v);

  lineArray.push(packageLine);
  lineArray.push(eachLine * 6);
  eachLineArray.push(eachLine);
}

lineArray.sort((a, b) => a - b);
eachLineArray.sort((a, b) => a - b);

let minPrice = 0;

while (N > 0) {
  const restLineOfSum = N * eachLineArray[0];

  if (lineArray[0] < restLineOfSum) {
    minPrice += lineArray[0];
    N -= 6;
  } else {
    minPrice += restLineOfSum;
    N -= N;
  }
}

console.log(minPrice);
