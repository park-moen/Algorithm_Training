const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

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
 * @returns string
 */
function solution(input) {
  const left = input[0].split(" ").map(Number);
  const right = input[1].split(" ").map(Number);
  const denominator = lcm(left[1], right[1]);
  const numerator =
    (denominator / left[1]) * left[0] + (denominator / right[1]) * right[0];

  // 분자, 분모 둘다 최소공배수로 나눠지는 값이 있는 경우(최소 공배수가 1이 아닌 경우)
  // e.g.4/8 => gcd가 2, 4/16
  const valueOfGCD = gcd(denominator, numerator);
  if (valueOfGCD !== 1) {
    return `${numerator / valueOfGCD} ${denominator / valueOfGCD}`;
  }

  return `${numerator} ${denominator}`;
}

console.log(solution(input));
