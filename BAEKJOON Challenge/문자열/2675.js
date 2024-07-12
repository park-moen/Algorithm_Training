const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const list = input.slice(1).map(value => value.split(" "));

  let result = "";
  list.forEach(value => {
    const [repeatCnt, QRCode] = value;

    result += QRCode.split("")
      .map(value => {
        return value.repeat(Number(repeatCnt));
      })
      .join("");

    result += "\n";
  });

  return result;
}

console.log(solution(input));
