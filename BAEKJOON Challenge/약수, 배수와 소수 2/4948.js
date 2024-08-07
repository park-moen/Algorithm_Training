const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

/**
 *
 * @param {number[]} input
 * @returns
 */
function solution(input) {
  const list = input.slice(0, input.length - 1);

  const result = [];
  list.forEach(el => {
    let count = 0;
    for (let i = el + 1; i <= el * 2; i++) {
      if (isPrime(i)) {
        count++;
      }
    }

    result.push(count);
  });

  return result.join("\n");
}

console.log(solution(input));
