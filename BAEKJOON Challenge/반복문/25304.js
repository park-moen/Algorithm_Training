const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input) {
  const totalPrice = Number(input[0]);
  const boughtList = input.slice(2);

  const expectPrice = boughtList.reduce((totalPrice, list) => {
    const item = list.split(" ").map(Number);

    return totalPrice + item[0] * item[1];
  }, 0);

  if (totalPrice === expectPrice) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(solution(input));
