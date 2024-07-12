const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {string} input
 * @returns number
 */
function firstSolution(input) {
  const alphabetObject = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
  };

  const wordArr = input.split("");

  let result = 0;
  for (const key in alphabetObject) {
    wordArr.forEach(word => {
      if (key.includes(word)) {
        result += alphabetObject[key];
      }
    });
  }

  return result;
}

// console.log(firstSolution(input));

/**
 *
 * @param {string} input
 * @returns number
 */
function secondSolution(input) {
  const dial = ["", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  const words = input.split("");

  let result = 0;
  words.forEach(word => {
    dial.forEach((dialAlphabet, idx) => {
      if (dialAlphabet.includes(word)) {
        result += idx + 2;
      }
    });
  });

  return result;
}

// console.log(secondSolution(input));

/**
 *
 * @param {string} input
 * @returns number
 */
function thirdSolution(input) {
  let result = 0;

  input.split("").forEach(word => {
    switch (word) {
      case "A":
      case "B":
      case "C":
        result += 3;
        break;
      case "D":
      case "E":
      case "F":
        result += 4;
        break;
      case "G":
      case "H":
      case "I":
        result += 5;
        break;
      case "J":
      case "K":
      case "L":
        result += 6;
        break;
      case "M":
      case "N":
      case "O":
        result += 7;
        break;
      case "P":
      case "Q":
      case "R":
      case "S":
        result += 8;
        break;
      case "T":
      case "U":
      case "V":
        result += 9;
        break;
      case "W":
      case "X":
      case "Y":
      case "Z":
        result += 10;
        break;
    }
  });

  return result;
}

console.log(thirdSolution(input));
