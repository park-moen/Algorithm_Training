const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);

const n = input.shift();

input.sort((a, b) => a - b);

const averageValue = String(
  Math.round(input.reduce((acc, cur) => acc + cur, 0) / n)
);
const middleValue = input[Math.floor(input.length / 2)];
const minValue = input[0];
const maxValue = input[input.length - 1];
const rangeValue = Math.abs(maxValue - minValue);

const hash = {};

for (number of input) {
  if (hash[number]) {
    hash[number] += 1;
  } else {
    hash[number] = 1;
  }
}

const hitMaxNum = Math.max(...Object.values(hash));
let hitMaxNumArr = [];
let hitMaxValue = 0;

for (const key in hash) {
  if (hash[key] === hitMaxNum) {
    hitMaxNumArr.push(Number(key));
  }
}

if (hitMaxNumArr.length > 1) {
  hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
  hitMaxValue = hitMaxNumArr[1];
} else {
  hitMaxValue = hitMaxNumArr[0];
}

console.log(
  averageValue + '\n' + middleValue + '\n' + hitMaxValue + '\n' + rangeValue
);
