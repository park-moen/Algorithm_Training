const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input) {
  const count = Number(input[0]);
  const initValue = input.slice(1);
  const result = [];

  for (let i = 0; i < count; i++) {
    const [a, b] = initValue[i].split(" ").map(Number);

    result.push(`Case #${i + 1}: ${a + b}`);
  }

  return result;
}

for (const value of solution(input)) {
  console.log(value);
}
