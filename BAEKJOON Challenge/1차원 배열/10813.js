const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const [N, _] = input[0].split(" ").map(Number);
  const basket = [...new Array(N + 1)].map((value, index) => index);
  const list = input.slice(1).map(item => item.split(" ").map(Number));

  list.forEach(item => {
    const [start, end] = item;
    [basket[start], basket[end]] = [basket[end], basket[start]];
  });

  return basket.slice(1).join(" ");
}

console.log(solution(input));
