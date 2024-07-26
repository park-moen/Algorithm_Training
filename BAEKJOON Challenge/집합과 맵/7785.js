const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function firstSolution(input) {
  const entryStatusMap = new Map(input.slice(1).map(entry => entry.split(" ")));

  entryStatusMap.forEach((_, key) => {
    if (entryStatusMap.get(key) === "leave") {
      entryStatusMap.delete(key);
    }
  });

  return [...entryStatusMap.keys()].sort((a, b) => (a > b ? -1 : 1)).join("\n");
}

// console.log(firstSolution(input));

/**
 *
 * @param {string []} input
 */
function secondSolution(input) {
  const entryStatusSet = new Set();

  input.slice(1).forEach(entry => {
    const [name, status] = entry.split(" ");

    if (status === "leave") {
      entryStatusSet.delete(name);
    } else {
      entryStatusSet.add(name);
    }
  });

  return [...entryStatusSet].sort((a, b) => (a > b ? -1 : 1)).join("\n");
}

console.log(secondSolution(input));
