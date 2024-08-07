const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

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

function solution(input) {
  const [M, N] = input;
  const arr = Array(M + 1)
    .fill(true)
    .fill(false, 0, 2);

  console.log(arr);

  const result = [];
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.join("\n");
}

console.log(solution(input));
