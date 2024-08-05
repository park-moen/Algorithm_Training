const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 *
 * @param {number[]} input
 * @returns number
 */
function solution(input) {
  const trees = input.slice(1);

  const intervals = [];
  for (let i = 1; i < trees.length; i++) {
    intervals.push(trees[i] - trees[i - 1]);
  }

  let intervalGCD = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    intervalGCD = gcd(intervalGCD, intervals[i]);
  }

  let additionalTrees = 0;
  for (let i = 0; i < intervals.length; i++) {
    additionalTrees += intervals[i] / intervalGCD - 1;
  }

  return additionalTrees;
}

console.log(solution(input));
