function solution(s) {
  let answer = s
    .split(' ')
    .map(v => +v)
    .sort((a, b) => a - b);

  return `${answer[0]} ${answer[answer.length - 1]}`;
}

const s1 = '1 2 3 4';
const s2 = '-1 -2 -3 -4';
const s3 = '-1 -1';

solution(s2);
