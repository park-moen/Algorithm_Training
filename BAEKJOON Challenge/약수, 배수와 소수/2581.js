const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

/**
 *
 * @param {number} num
 * @returns boolean
 */
function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {number[]} input
 * @returns string
 */
function solution(input) {
  const [start, end] = input;
  const primeNum = [];
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeNum.push(i);

      if (min > i) {
        min = i;
      }
    }
  }

  if (primeNum.length === 0) {
    return "-1";
  }

  const sum = primeNum.reduce((acc, cur) => acc + cur, 0);
  return sum + "\n" + min;
}

console.log(solution(input));
