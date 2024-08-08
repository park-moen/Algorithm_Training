const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function sieve(max) {
  const isPrime = new Array(max + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

function solution(input) {
  const list = input.slice(1).map(Number);
  const isPrime = sieve(Math.max(...list));

  return list.map(num => {
    let count = 0;
    for (let i = 2; i <= num / 2; i++) {
      if (isPrime[i] && isPrime[num - i]) {
        count++;
      }
    }

    return count;
  });
}

console.log(solution(input));
