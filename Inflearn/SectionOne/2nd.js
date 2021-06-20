function solution(a, b, c) {
  let answer = 'YES';
  let max;
  const total = a + b + c;

  if (a > b) max = a;
  else max = b;

  if (c > max) max = c;

  if (total - max < max) return 'NO';

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
