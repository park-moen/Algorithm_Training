const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function firstSolution(input) {
  const [a, b, c, d, e, f] = input;

  let flag = false;
  let result = [];

  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        result.push(x, y);
        flag = true;
        break;
      }
    }

    if (flag) {
      break;
    }
  }

  return result.join(" ");
}

// console.log(firstSolution(input));

function secondSolution(input) {
  const [a, b, c, d, e, f] = input;
}

console.log(secondSolution(input));
