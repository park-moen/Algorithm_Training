const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {string []} input
 * @returns number
 */
function solution(input) {
  const N = Number(input[0]);
  const scoreList = input[1].split(" ").map(Number);
  const maxScore = Math.max(...scoreList);

  const totalScore = scoreList.reduce((acc, cur) => {
    return acc + (cur / maxScore) * 100;
  }, 0);

  return totalScore / N;
}

console.log(solution(input));
