const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const cards = input[1].split(" ").map(Number);

  let sumOfMax = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const totalCard = cards[i] + cards[j] + cards[k];

        if (totalCard <= M && sumOfMax < totalCard) {
          sumOfMax = totalCard;
        }
      }
    }
  }

  return sumOfMax;
}

console.log(solution(input));
