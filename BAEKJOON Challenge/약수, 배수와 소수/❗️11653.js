const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {number} input
 * @returns string
 */
function solution(input) {
  let N = Number(input);
  const factors = [];

  // 소수중에 가장 작은 수 2로 소인수분해 하는 작업
  const minDivisor = 2;
  while (N % minDivisor === 0) {
    factors.push(minDivisor);
    N /= minDivisor;
  }

  // 홀수 소수를 N 제곱근까지 소인수분해 하는 작업
  let nextDivisor = 3;
  while (nextDivisor <= Math.sqrt(N)) {
    while (N % nextDivisor === 0) {
      factors.push(nextDivisor);
      N /= nextDivisor;
    }

    nextDivisor += 2;
  }

  // N이 2보다 큰 소수가 되는 경우
  if (N > 2) {
    factors.push(N);
  }

  return factors.join("\n");
}

console.log(solution(input));
