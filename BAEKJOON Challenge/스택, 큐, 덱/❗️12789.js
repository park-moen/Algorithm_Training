const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns
 */
function solution(input) {
  const N = Number(input[0]);
  const students = input[1].split(" ").map(Number);
  const stack = [];
  let expected = 1;

  students.forEach(student => {
    while (stack.length && stack[stack.length - 1] === expected) {
      stack.pop();
      expected++;
    }

    if (student === expected) {
      expected++;
    } else {
      stack.push(student);
    }
  });

  while (stack.length && stack[stack.length - 1] === expected) {
    stack.pop();
    expected++;
  }

  return stack.length === 0 ? "Nice" : "Sad";
}

console.log(solution(input));
