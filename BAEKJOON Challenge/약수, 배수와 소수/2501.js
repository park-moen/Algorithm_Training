const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

/**
 *
 * @param {number[]} input
 * @returns
 */
function solution(input) {
  const [N, K] = input;

  if (K === 1) {
    return 1;
  }

  const divisor = [];
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      divisor.push(i);
      if (i !== N / i) {
        divisor.push(N / i);
      }
    }
  }

  divisor.sort((a, b) => a - b);

  if (divisor.length < K) {
    return 0;
  }

  return divisor[K - 1];
}

console.log(solution(input));
