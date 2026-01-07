/**
 *
 * @param {string[]} survey
 * @param {number[]} choices
 */
function solution(survey, choices) {
  const score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  const typeScore = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i];
    const question = survey[i];
    const points = score[choice];

    if (points === 4) {
      continue;
    }

    if (choice <= 4) {
      typeScore[question[0]] += points;
    } else {
      typeScore[question[1]] += points;
    }
  }

  let result = '';
  result += typeScore.R >= typeScore.T ? 'R' : 'T';
  result += typeScore.C >= typeScore.F ? 'C' : 'F';
  result += typeScore.J >= typeScore.M ? 'J' : 'M';
  result += typeScore.A >= typeScore.N ? 'A' : 'N';

  return result;
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];

solution(survey, choices);
