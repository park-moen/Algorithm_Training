// n의 최댓값은 20이고 20!(모든 수열에 대한 경우의 수)의 값은
// 2432902008176640000이라는 매우 큰 수로 재귀 함수로 문제를 풀게된다면 시간 초과가 발생
function solution(n, k) {
  const answer = [];

  function dfs(array) {
    if (array.length === n) {
      answer.push([...array]);
    } else {
      for (let i = 1; i <= n; i++) {
        if (!array.includes(i)) {
          array.push(i);
          dfs(array);
          array.pop();
        }
      }
    }
  }

  dfs([]);

  return answer[k - 1];
}

const n = 3;
const k = 5;

// solution(n, k);

// 재귀함수를 사용하면 시간 초과가 발생하여 루틴을 찾아서 분활 정복으로 문제를 해결
function solution2(n, k) {
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

solution2(n, k);
