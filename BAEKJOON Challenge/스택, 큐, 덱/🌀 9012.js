const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const [_, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(parens => parens.split(""));

/**
 *
 * @param {string[]} params
 * @returns string[]
 */
function isVPS(parens) {
  const stack = [];
  for (const paren of parens) {
    if (paren === "(") {
      stack.push(paren);
    } else {
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const result = [];

  input.forEach(parens => {
    if (isVPS(parens)) {
      result.push("YES");
    } else {
      result.push("NO");
    }
  });

  return result.join("\n");
}

console.log(solution(input));
