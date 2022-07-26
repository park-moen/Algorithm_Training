const fs = require('fs');
let [n, k] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

let res = 0;

while (true) {
  const target = parseInt(n / k) * k;
  console.log(target);
  res += n - target;
  n = target;

  if (n < k) break;

  res += 1;
  n /= k;
}

res += n - 1;

console.log(res);

// 2번째 방법

// let count = 0;

// while (true) {
//   if (n % k === 0) {
//     n = n / k;
//     count += 1;
//   } else {
//     n = n - 1;
//     count += 1;
//   }

//   if (n === 1) break;
// }

// console.log(count);
