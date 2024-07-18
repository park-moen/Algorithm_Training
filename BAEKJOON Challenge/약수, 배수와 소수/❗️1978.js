const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

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
 * @param {string[]} input
 * @returns
 */
function solution(input) {
  const numList = input.slice(1)[0].split(" ").map(Number);

  let count = 0;

  for (const num of numList) {
    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}

console.log(solution(input));
