function solution(k, score) {
  const result = [score[0]];
  const hallOfFame = [score[0]];

  for (let i = 1; i < score.length; i++) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => b - a);

    if (hallOfFame.length > k) {
      hallOfFame.splice(k);
    }

    result.push(hallOfFame[hallOfFame.length - 1]);
  }

  return result;
}

function secondeSolution(k, score) {
  const hallOfFame = [];

  return score.map(value => {
    hallOfFame.push(value);
    hallOfFame.sort((a, b) => a - b);

    if (hallOfFame.length > k) {
      hallOfFame.shift();
    }

    return hallOfFame[0];
  });
}

const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

console.log(solution(k, score));
console.log(secondeSolution(k, score));
