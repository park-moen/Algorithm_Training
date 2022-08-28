function solution(n, k) {
  const answer = [];
  const arr = Array.from({ length: n }, (_, index) => index + 1);

  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    const fact = factorial(arr.length - 1);
    const index = Math.floor(nth / fact);

    nth = nth % fact;
    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

const n = 4;
const k = 15;

solution(n, k);
