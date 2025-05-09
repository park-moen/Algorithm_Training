function solution(a, b) {
  let sum = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// 등차수열의 합 공식을 활용한 풀이
function solution2(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

const a = 3;
const b = 3;

solution(a, b);

console.log(Math.abs(2));
