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
  res += n - target;
  n = target;

  if (n < k) break;

  res += 1;
  n /= k;
}

res += n - 1;

console.log(res);
