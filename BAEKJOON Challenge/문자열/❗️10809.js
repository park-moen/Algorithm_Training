const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {string} input
 * @returns string
 */
function firstSolution(input) {
  const result = [];

  for (let i = 97; i <= 122; i++) {
    result.push(input.indexOf(String.fromCharCode(i)));
  }

  return result.join(" ");
}

console.log(firstSolution(input));

/**
 *
 * @param {string} input
 * @returns string
 */
function secondSolution(input) {
  const alphabet = new Array(26).fill(-1);

  for (let i = 0; i < input.length; i++) {
    const idx = input.charCodeAt(i) - "a".charCodeAt(0);

    if (alphabet[idx] === -1) {
      alphabet[idx] = i;
    }
  }

  return alphabet.join(" ");
}

console.log(secondSolution(input));
