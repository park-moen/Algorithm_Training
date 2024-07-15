const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string []} input
 */
function firstSolution(input) {
  const matrix = input.map(value => value.split(" ").map(Number));

  let max = 0;
  let rowIndex = 0;
  let columnIndex = 0;
  matrix.forEach((value, index) => {
    const matrixMax = Math.max(...value);
    if (max < matrixMax) {
      max = matrixMax;
      rowIndex = index;
      columnIndex = value.indexOf(max);
    }
  });

  return max + "\n" + (rowIndex + 1) + " " + (columnIndex + 1);
}

// console.log(firstSolution(input));

/**
 *
 * @param {string[]} input
 * @returns [number, number, number]
 */
function secondSolution(input) {
  const matrix = input.map(value => value.split(" ").map(Number));

  let max = 0;
  let rowIndex = 0;
  let columnIndex = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // max <= matrix[i][j] 조건을 크거나 같다로 한 이유: 동일한 최대값이 여러개 존재할 수 있다는 점을 유의
      if (max <= matrix[i][j]) {
        max = matrix[i][j];
        rowIndex = i + 1;
        columnIndex = j + 1;
      }
    }
  }

  return max + "\n" + rowIndex + " " + columnIndex;
}

console.log(secondSolution(input));
