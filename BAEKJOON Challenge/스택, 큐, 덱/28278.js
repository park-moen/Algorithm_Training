const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns
 */
function solution(input) {
  const stack = [];
  const result = [];

  input.slice(1).forEach(el => {
    const [cmd, value] = el.split(" ").map(Number);

    switch (cmd) {
      case 1:
        stack.push(value);
        break;
      case 2:
        result.push(stack.length === 0 ? -1 : stack.pop());
        break;
      case 3:
        result.push(stack.length);
        break;
      case 4:
        result.push(stack.length === 0 ? 1 : 0);
        break;
      case 5:
        result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        break;
    }
  });

  return result.join("\n");
}

console.log(solution(input));
