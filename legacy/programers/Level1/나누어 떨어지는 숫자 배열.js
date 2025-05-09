function solution(arr, divisor) {
  const answer = arr.filter(number => number % divisor === 0).sort((a, b) => a - b);

  return answer.length ? answer : [-1];
}

const arr = [2, 36, 1, 3];
const divisor = 1;

console.log(solution(arr, divisor));
