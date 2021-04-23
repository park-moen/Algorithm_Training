function solution(a, b, c) {
  let answer = 'YES';
  let max = 0;
  const sum = a + b + c;

  if (a > b) max = a;
  else if (b > a) max = b;
  else max = c;

  if (sum - max <= max) answer = 'NO';

  return answer;
}

console.log(solution(13, 33, 17));
