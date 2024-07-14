const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .splice(" ")
  .map(value => value.split(" "));

function changeScore(rating) {
  switch (rating) {
    case "A+":
      return 4.5;
    case "A0":
      return 4.0;
    case "B+":
      return 3.5;
    case "B0":
      return 3.0;
    case "C+":
      return 2.5;
    case "C0":
      return 2.0;
    case "D+":
      return 1.5;
    case "D0":
      return 1.0;
    case "F":
      return 0.0;
    default:
      return rating;
  }
}

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  let sumOfGrades = 0;
  let totalScore = 0;

  for (const [_, grades, subjectRating] of input) {
    if (changeScore(subjectRating) === "P") {
      continue;
    }

    totalScore += Number(grades) * changeScore(subjectRating);
    sumOfGrades += Number(grades);
  }

  return totalScore / sumOfGrades;
}

console.log(solution(input));
