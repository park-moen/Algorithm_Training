function solution(k, score) {
  const answer = [score[0]];
  const hallOfFame = [score[0]];

  for (let i = 1; i < score.length; i++) {
    hallOfFame.push(score[i]);

    hallOfFame.sort((a, b) => b - a);

    if (hallOfFame.length > k) hallOfFame.splice(k);

    answer.push(hallOfFame[hallOfFame.length - 1]);
  }

  return answer;
}

const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

console.log(solution(k, score));
