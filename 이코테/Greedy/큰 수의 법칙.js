// 1번 방법
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
let [n, m, k] = input[0].split(' ').map(v => +v);
const data = input[1]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => b - a);

const first = data[0];
const second = data[1];

let res = 0;

while (true) {
  for (let i = 0; i < k; i++) {
    if (m === 0) break;

    res += first;
    m--;
  }

  if (m === 0) break;

  res += second;
  m--;
}

console.log(res);

// 2번 방법
// const fs = require('fs');
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');
// let [n, m, k] = input[0].split(' ').map(v => +v);
// const data = input[1]
//   .split(' ')
//   .map(v => +v)
//   .sort((a, b) => a - b);

// const first = data[data.length - 1];
// const second = data[data.length - 2];

// let count = parseInt(m / (k + 1)) * k;
// count += parseInt(m % (k + 1));

// let res = 0;
// res += count * first;
// res += (m - count) * second;

// 3번 방법
// const arr = input[1]
//   .split(' ')
//   .map(v => +v)
//   .sort((a, b) => b - a);

// const firstMaxNumber = arr[0];
// const secondMaxNumber = arr[1];

// let result = 0;

// for (let i = 1; i <= m; i++) {
//   if (i % (k + 1) === 0) {
//     result += secondMaxNumber;
//   } else {
//     result += firstMaxNumber;
//   }
// }

// console.log(result);
