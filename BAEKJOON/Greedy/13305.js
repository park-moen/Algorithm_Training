const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
let n = Number(input[0]);
let distance = input[1].split(' ').map(v => BigInt(v));
let price = input[2].split(' ').map(v => BigInt(v));

let currentPrice = price[0];
let result = BigInt(0);

for (let i = 0; i < n - 1; i++) {
  result += currentPrice * distance[i];
  if (currentPrice > price[i + 1]) {
    currentPrice = price[i + 1];
  }
}

console.log(String(result));

// 5
// 1 2 3 2
// 50 30 40 40 20
// 260

// 7
// 3 4 2 2 4 5
// 8 9 5 4 2 7 1
// 92
