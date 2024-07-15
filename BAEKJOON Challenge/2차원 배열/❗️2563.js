const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 */
function solution(input) {
  const N = Number(input[0]);
  const dotArray = input.slice(1).map(value => value.split(" ").map(Number));
  const square = Array.from(new Array(100), () => new Array(100).fill(0));

  let area = 0;
  dotArray.forEach(dots => {
    const [x, y] = dots;

    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        const increaseSquareX = x + j;
        const increaseSquareY = y + k;

        if (square[increaseSquareX][increaseSquareY] === 0) {
          square[increaseSquareX][increaseSquareY] = 1;
          area++;
        }
      }
    }
  });

  return area;
}

console.log(solution(input));
