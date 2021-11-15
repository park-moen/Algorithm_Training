// 1번 방법

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(v => +v);

let res = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  const data = input[i + 1].split(' ').map(v => +v);

  const minValue = Math.min(...data);

  res = Math.max(res, minValue);
}

console.log(res);

// 2번 방법

// const fs = require('fs');
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(v => +v);

// let res = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i < n; i++) {
//   const data = input[i + 1].split(' ').map(v => v);
//   let minValue = Number.MAX_SAFE_INTEGER;

//   for (const val of data) {
//     minValue = Math.min(minValue, val);
//   }

//   res = Math.max(res, minValue);
// }

// console.log(res);
