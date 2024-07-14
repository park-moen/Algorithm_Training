const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {string} input
 * @returns string
 */
function firstSolution(input) {
  const words = input.toUpperCase().split("");
  const alphabet = {};
  words.forEach(word => {
    if (word in alphabet) {
      alphabet[word] += 1;
    } else {
      alphabet[word] = 1;
    }
  });

  let result = "";
  let cnt = 0;

  for (const char in alphabet) {
    if (alphabet[char] === cnt) {
      result = "?";
      continue;
    }

    if (alphabet[char] > cnt) {
      cnt = alphabet[char];
      result = char;
    }
  }

  return result;
}

// console.log(firstSolution(input));

/**
 *
 * @param {string} input
 * @returns string
 */
function secondSolution(input) {
  const words = input.toUpperCase();
  const result = new Array(26).fill(0);

  for (let i = 0; i < words.length; i++) {
    result[words.charCodeAt(i) - 65] += 1;
  }

  const max = Math.max(...result);
  const index = result.indexOf(max);

  let isSame = false;

  for (let j = 0; j < 26; j++) {
    if (result[j] === max && index !== j) {
      isSame = true;
      break;
    }
  }

  return isSame ? "?" : String.fromCharCode(index + 65);
}

console.log(secondSolution(input));
