function solution(dartResult) {
  let darts = dartResult.split('');
  let scores = [];
  let score = 0;

  for (let i = 0; i < darts.length; i++) {
    if (!isNaN(darts[i])) {
      if (darts[i] === '1' && darts[i + 1] === '0') {
        score = 10;
        i++;
      } else score = darts[i];
    } else if (darts[i] === 'S') {
      scores.push(Math.pow(score, 1));
    } else if (darts[i] === 'D') {
      scores.push(Math.pow(score, 2));
    } else if (darts[i] === 'T') {
      scores.push(Math.pow(score, 3));
    } else if (darts[i] === '#') {
      scores[scores.length - 1] *= -1;
    } else if (darts[i] === '*') {
      scores[scores.length - 2] *= 2;
      scores[scores.length - 1] *= 2;
    }
  }

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum;
}
