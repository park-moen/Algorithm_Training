const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string} words
 * @returns
 */
function checkSequence(words) {
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] !== words[i + 1] && words.slice(i + 1).includes(words[i])) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  let result = 0;

  input.forEach(words => {
    if (checkSequence(words)) {
      result++;
    }
  });

  return result;
}

console.log(solution(input.slice(1)));
