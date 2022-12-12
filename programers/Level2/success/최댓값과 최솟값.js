function solution(s) {
  let answer = [];
  const splitS = s.split(' ');

  answer.push(Math.min(...splitS));
  answer.push(Math.max(...splitS));

  return answer.join(' ');
}

const s1 = '1 2 3 4';
const s2 = '-1 -2 -3 -4';
const s3 = '-1 -1';

solution(s1);
