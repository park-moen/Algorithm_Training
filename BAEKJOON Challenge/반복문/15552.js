const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input) {
  const count = Number(input[0]);
  const initValue = input.slice(1);

  let result = "";

  for (let i = 0; i < count; i++) {
    const [a, b] = initValue[i].split(" ").map(Number);

    result += a + b + "\n";
  }

  return result;
}

console.log(solution(input));
