function solution(a, b, c) {
  let answer = 'YES';
  let max = Number.MIN_SAFE_INTEGER;
  let sum = a + b + c;

  if (a > max) max = a;
  if (b > max) max = b;
  if (c > max) max = c;

  if (sum - max <= max) return 'NO';

  return answer;
}

console.log(solution(6, 7, 11));
