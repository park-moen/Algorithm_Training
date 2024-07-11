const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input) {
  const target = Number(input[2]);
  const list = input[1].split(" ").map(Number);

  let count = 0;
  for (const item of list) {
    if (item === target) {
      count++;
    }
  }

  return count;
}

console.log(solution(input));
