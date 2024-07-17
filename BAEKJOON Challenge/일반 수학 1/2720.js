const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 */
function solution(input) {
  const T = Number(input[0]);
  const totalCostList = input.slice(1).map(Number);
  const pennyList = [25, 10, 5, 1];
  let result = "";

  for (let i = 0; i < T; i++) {
    totalCostList[i];

    const currentPennyList = [];
    for (const penny of pennyList) {
      if (totalCostList[i] % penny === totalCostList[i]) {
        currentPennyList.push(0);
        continue;
      }

      currentPennyList.push(Math.floor(totalCostList[i] / penny));
      totalCostList[i] = totalCostList[i] % penny;
    }

    result += currentPennyList.join(" ") + "\n";
  }

  return result;
}

console.log(solution(input));
