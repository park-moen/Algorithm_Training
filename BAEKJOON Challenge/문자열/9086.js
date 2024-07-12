const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const wordList = input.slice(1);

  let result = "";
  wordList.forEach(value => {
    const strWord = value[0];
    const endWord = value[value.length - 1];

    result += strWord + endWord + "\n";
  });

  return result;
}

console.log(solution(input));
