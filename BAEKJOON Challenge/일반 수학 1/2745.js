const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

/**
 *
 * @param {string[]} input
 * @returns
 */
function firstSolution(input) {
  const N = input[0];
  const BFormat = Number(input[1]);

  let result = 0;
  for (let i = 0; i < N.length; i++) {
    if (N[i].charCodeAt(0) >= 65 && N[i].charCodeAt(0) <= 90) {
      result += (N[i].charCodeAt(0) - 55) * BFormat ** (N.length - 1 - i);
    } else {
      result += N[i] * BFormat ** (N.length - 1 - i);
    }
  }

  return result;
}

console.log(firstSolution(input));

function secondeSolution(input) {
  const N = input[0];
  const BFormat = Number(input[1]);

  console.log(parseInt(N, BFormat));

  return parseInt(N, BFormat);
}

// console.log(secondeSolution(input));
