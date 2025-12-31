/**
 *
 * @param {string} dartResult
 */

function solution(dartResult) {
  const regex = /\d+[SDT][*#]?/g;
  const rounds = dartResult.match(regex);
  const scores = [];
  const bonusMap = {
    S: 1,
    D: 2,
    T: 3,
  };

  rounds.forEach((round, idx) => {
    const [, score, bonus, option] = round.match(/(\d+)([SDT])([*#]?)/);
    let point = Number(score) ** bonusMap[bonus];

    if (option === '*') {
      point *= 2;

      if (idx > 0) {
        scores[idx - 1] *= 2;
      }
    } else if (option === '#') {
      point *= -1;
    }

    scores.push(point);
  });

  return scores.reduce((sum, score) => sum + score, 0);
}

const dartResult = '1S2D*3T';

solution(dartResult);
