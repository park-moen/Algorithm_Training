const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function solution(input) {
  let result = "";

  let idx = 0;
  while (true) {
    const n = input[idx];
    const divisor = [];

    if (n === -1) {
      break;
    }
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisor.push(i);

        if (i !== n / i && n !== n / i) {
          divisor.push(n / i);
        }
      }
    }

    divisor.sort((a, b) => a - b);

    const sum = divisor.reduce((acc, cur) => acc + cur, 0);
    if (sum === n) {
      result += `${n} = ${divisor.join(" + ")}` + "\n";
    } else {
      result += `${n} is NOT perfect.` + "\n";
    }

    idx++;
  }

  return result;
}

console.log(solution(input));
