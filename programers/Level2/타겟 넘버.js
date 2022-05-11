function solution(numbers, target) {
  let answer = 0;

  function dfs(L, sum) {
    if (L === numbers.length) {
      if (sum === target) answer++;

      return;
    }

    dfs(L + 1, sum + numbers[L]);
    dfs(L + 1, sum - numbers[L]);
  }

  dfs(0, 0);

  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

solution(numbers, target);
