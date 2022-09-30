function solution(n) {
  var answer = n
    .toString()
    .split('')
    .reverse()
    .map(el => parseInt(el));

  return answer;
}

const n = 12345;

solution(n);
