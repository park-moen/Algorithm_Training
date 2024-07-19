const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(item => item.split(" ").map(Number));

/**
 *
 * @param {number[]} positions
 * @returns
 */
function findUnique(positions) {
  if (positions[0] === positions[1]) {
    return positions[2];
  } else if (positions[0] === positions[2]) {
    return positions[1];
  } else {
    return positions[0];
  }
}

/**
 *
 * @param {number[][]} input
 * @returns
 */
function solution(points) {
  const widthList = points.map(point => point[0]);
  const heightList = points.map(point => point[1]);

  return `${findUnique(widthList)} ${findUnique(heightList)}`;
}

console.log(solution(input));
