const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function isPrime(num) {
  if (num <= 1) {
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
 * @returns
 */
function solution(input) {
  const list = input.slice(1);

  const result = [];
  for (let i = 0; i < list.length; i++) {
    let el = list[i];

    while (!isPrime(el)) {
      el += 1;
    }

    result.push(el);
  }

  return result.join("\n");
}

console.log(solution(input));
