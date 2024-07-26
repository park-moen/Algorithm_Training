const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string []} input
 * @returns string
 */
function solution(input) {
  const N = Number(input[0].split(" ")[0]);

  const pokemonList = input.slice(1, N + 1);
  const questionList = input.slice(N + 1);
  const pokemonListMap = new Map(
    pokemonList.map((pokemon, index) => [pokemon, index + 1])
  );

  return questionList
    .map(question => {
      const parsedQuestion = Number(question);

      if (Number.isNaN(parsedQuestion)) {
        return pokemonListMap.get(question);
      } else {
        return pokemonList[parsedQuestion - 1];
      }
    })
    .join("\n");
}

console.log(solution(input));
