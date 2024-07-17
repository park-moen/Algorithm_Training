const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

/**
 *
 * @param {string[]} input
 * @returns
 */
function firstSolution(input) {
  let N = Number(input[0]);
  const B = Number(input[1]);

  if (N === 0) {
    return 0;
  }

  let result = "";
  while (N > 0) {
    let rest = N % B;

    if (rest < 10) {
      result += rest;
    } else {
      result += String.fromCharCode(rest + 55);
    }

    N = Math.floor(N / B);
  }

  return result.split("").reverse().join("");
}

console.log(firstSolution(input));

function secondSolution(input) {
  const N = parseInt(input[0]);
  const B = parseInt(input[1]);

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let number = N;
  let result = "";

  while (number > 0) {
    const remainder = number % B;
    result = digits[remainder] + result;
    number = Math.floor(number / B);
  }

  console.log(result);
}

console.log(secondSolution(input));
