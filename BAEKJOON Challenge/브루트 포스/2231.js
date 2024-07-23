const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {readonly string} N
 * @returns number
 */
function solution(input) {
  const N = Number(input);
  let NConstructor = 0;

  for (let i = 1; i < N - 1; i++) {
    const loopI = i.toString();
    let sumOfPlaceValue = 0;
    for (let j = 0; j < loopI.length; j++) {
      sumOfPlaceValue += Number(loopI[j]);
    }

    if (N === sumOfPlaceValue + Number(loopI)) {
      NConstructor = Number(loopI);
      break;
    }
  }

  return NConstructor;
}

// console.log(solution(input));

/**
 *
 * @param {string} input
 * @returns number
 */
function secondSolution(input) {
  const N = Number(input);
  const optimalRange = N - 9 * input.length;

  let NConstructor = 0;

  for (let i = optimalRange; i < N; i++) {
    const currentValue = i.toString();
    let sumOfPlaceValue = 0;

    for (let j = 0; j < currentValue.length; j++) {
      sumOfPlaceValue += Number(currentValue[j]);
    }

    if (N === sumOfPlaceValue + i) {
      NConstructor = i;
      break;
    }
  }

  return NConstructor;
}

console.log(secondSolution(input));
