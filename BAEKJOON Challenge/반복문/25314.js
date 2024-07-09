const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

function firstSolutionOne(input) {
  let mutableInput = input;
  let result = "";

  while (mutableInput > 0) {
    result += "long ";
    mutableInput -= 4;
  }

  return result + "int";
}

// console.log(firstSolutionOne(input));

function secondSolution(input) {
  const divisionValue = parseInt(input / 4, 0);
  let result = "";

  for (let i = 0; i < divisionValue; i++) {
    result += "long ";
  }

  return result + "int";
}

console.log(secondSolution(input));
