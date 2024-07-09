const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());

  return input.reduce((acc, cur) => {
    const [firstValue, lastValue] = cur.split(" ").map(Number);
    const totalValue = firstValue + lastValue;

    acc += totalValue + "\n";

    return acc;
  }, "");
}

console.log(solution(input));
