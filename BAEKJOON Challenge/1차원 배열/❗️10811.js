const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const [N, _] = input[0].split(" ").map(Number);
  const baskets = Array.from({ length: N }, (_, index) => index + 1);

  input
    .slice(1)
    .map(value => value.split(" ").map(Number))
    .forEach(pointer => {
      const start = pointer[0] - 1;
      const end = pointer[1];
      const reversePart = baskets.slice(start, end).reverse();

      baskets.splice(start, end - start, ...reversePart);
    });

  return baskets.join(" ");
}

console.log(solution(input));
