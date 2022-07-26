// 1번 문제 풀이
// 다중 for문을 사용하여 O(n^2)이라는 단점이 있음

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input[0]);
const timeWork = input[1]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = i; j >= 0; j--) {
    result += timeWork[j];
  }
}

console.log(result);

// 2번 문제 풀이
// 새로운 변수에 이전 값의 누적하여 결과에 더해주는 방식을 사용

const fs = require('fs');
const input2 = fs.readFileSync('input.txt').toString().trim().split('\n');
const n2 = Number(input[0]);
const timeWork2 = input[1]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => a - b);

let result2 = 0;
let previousValue = 0;

for (let i = 0; i < n; i++) {
  result2 += timeWork2[i] + previousValue;
  previousValue += timeWork[i];
}

console.log(result2);

// 5
// 11 103 132 19 102

// 5
// 3 1 4 3 2
