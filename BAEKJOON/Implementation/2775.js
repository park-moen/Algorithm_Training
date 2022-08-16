const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const testCase = input.shift();

let result = [];

for (let i = 0; i < testCase; i++) {
  const floor = Number(input.shift());
  const room = Number(input.shift());
  const houseInfo = Array.from({ length: floor + 1 }, () => Array(room + 1).fill(0));

  for (let i = 1; i <= room; i++) {
    houseInfo[0][i] = i;
  }

  for (let i = 1; i <= floor; i++) {
    for (let j = 1; j <= room; j++) {
      houseInfo[i][j] = houseInfo[i - 1][j] + houseInfo[i][j - 1];
    }
  }

  result.push(houseInfo[floor][room]);
}

console.log(result.join('\n'));
