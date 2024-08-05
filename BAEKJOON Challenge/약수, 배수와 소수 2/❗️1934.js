const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// while문을 사용한 gcd 구하는 알고리즘
// function gcd(a, b) {
//   while (b !== 0) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }

// 재귀를 사용한 gcd 구하는 알고리즘
function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

/**
 *
 * @param {string[]} input
 * @returns
 */
function solution(input) {
  const n = input[0];
  const testCase = input.slice(1).map(test => test.split(" ").map(Number));

  const result = [];
  for (const test of testCase) {
    const [a, b] = test;

    result.push(lcm(a, b));
  }

  return result.join("\n");
}

console.log(solution(input));
