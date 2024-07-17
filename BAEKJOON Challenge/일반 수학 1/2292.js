const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  if (input === 1) {
    return 1;
  }

  let floor = 1;
  let endPoint = 1;
  let range = 6;

  while (true) {
    endPoint += range * floor;
    floor++;

    if (endPoint >= input) {
      break;
    }
  }

  return floor;
}

console.log(solution(input));
