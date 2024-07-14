const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {string} input
 * @returns
 */

function solution(input) {
  let words = input;
  const croatiaSpelling = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  croatiaSpelling.forEach(spell => {
    words = words.split(spell).join("*");
  });

  return words.length;
}

console.log(solution(input));
