// 등차수열의 합 공식(가우스 공식)
function solution(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const count = max - min + 1;

  return ((min + max) * count) / 2;
}

console.log(solution(3, 5));
