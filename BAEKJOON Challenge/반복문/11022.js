const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input) {
  return input.slice(1).reduce((acc, cur, index) => {
    const [a, b] = cur.split(" ").map(Number);

    return acc + `Case #${index + 1}: ${a} + ${b} = ${a + b}` + "\n";
  }, "");
}

console.log(solution(input));
