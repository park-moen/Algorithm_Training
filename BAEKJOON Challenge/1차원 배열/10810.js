const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const [basketCnt, _] = input[0].split(" ").map(Number);
  const basket = new Array(basketCnt).fill(0);
  let putList = input.slice(1).map(putItem => putItem.split(" ").map(Number));

  putList.forEach(putItem => {
    const [startPoint, endPoint, pickBall] = putItem;
    basket.fill(pickBall, startPoint - 1, endPoint);
  });

  return basket.join(" ");
}

console.log(solution(input));
