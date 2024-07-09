const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

function solution(input) {
  let mutableInput = input;
  let result = 0;

  while (mutableInput > 0) {
    result += mutableInput;
    mutableInput--;
  }

  return result;
}

console.log(solution(input));
