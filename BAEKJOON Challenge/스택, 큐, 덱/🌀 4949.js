const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} brackets
 * @returns boolean
 */
function isVPS(brackets) {
  const stack = [];

  for (const el of brackets) {
    if (el === "[" || el === "(") {
      stack.push(el);
    } else if (el === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    } else if (el === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
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
  const list = input.slice(0, input.length - 1);

  for (const element of list) {
    const brackets = element.replace(/[^\[\]\(\)]/g, "");

    if (isVPS(brackets)) {
      result.push("yes");
    } else {
      result.push("no");
    }
  }

  return result.join("\n");
}

console.log(solution(input));
