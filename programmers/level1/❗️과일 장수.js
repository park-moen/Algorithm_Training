function solution(k, m, score) {
  const sortScore = score.sort((a, b) => b - a);

  const boxGroup = [];

  for (let i = 0; i < sortScore.length; i += m) {
    boxGroup.push(sortScore.slice(i, i + m));
  }

  return boxGroup
    .filter(box => box.length === m)
    .reduce((acc, cur) => acc + cur[m - 1] * m * 1, 0);
}

function secondSolution(k, m, score) {
  const sortScore = score.sort((a, b) => b - a);
  let result = 0;

  for (let i = m - 1; i < sortScore.length; i += m) {
    result += sortScore[i] * m;
  }

  return result;
}

function thirdSolution(k, m, score) {
  return [...score]
    .sort((a, b) => b - a)
    .filter((_, idx) => (idx + 1) % m === 0)
    .reduce((acc, cur) => acc + cur * m, 0);
}

const k = 3;
const m = 4;
const score = [1, 2, 3, 1, 2, 3, 1];

// console.log(solution(k, m, score));
// console.log(secondSolution(k, m, score));
console.log(thirdSolution(k, m, score));
