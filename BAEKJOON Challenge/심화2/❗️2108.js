const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const n = Number(input[0]);
  const integer = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  const mean = Math.round(integer.reduce((acc, cur) => acc + cur, 0) / n);
  const median = integer[parseInt(n / 2)];

  const hash = new Map();
  let max = 0;

  for (const value of integer) {
    if (hash.has(value)) {
      hash.set(value, hash.get(value) + 1);
    } else {
      hash.set(value, 1);
    }

    if (hash.get(value) > max) max = hash.get(value);
  }

  let modeList = [];

  for (const value of new Set(integer)) {
    if (hash.get(value) === max) {
      modeList.push(value);
    }
  }

  const mode = modeList.length > 1 ? modeList[1] : modeList[0];
  const range = Math.max(...integer) - Math.min(...integer);

  return [mean, median, mode, range].join('\n');
}

console.log(solution(input));
