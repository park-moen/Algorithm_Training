const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  const A = input.slice(1, N + 1).map(value => value.split(" ").map(Number));
  const B = input.slice(N + 1).map(value => value.split(" ").map(Number));

  let result = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      result += A[i][j] + B[i][j] + " ";
    }

    result += "\n";
  }

  return result;
}

console.log(solution(input));
