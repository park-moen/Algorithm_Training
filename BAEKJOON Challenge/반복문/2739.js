const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

function solution(number) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

solution(input);
