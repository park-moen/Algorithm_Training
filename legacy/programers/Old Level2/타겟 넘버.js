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

function solution2(numbers, target) {
  let answer = 0;
  function dfs(node, depth) {
    if (depth === numbers.length) {
      if (target === node) {
        answer++;
      }

      return;
    }

    dfs(node + numbers[depth], depth + 1);
    dfs(node - numbers[depth], depth + 1);
  }

  dfs(0, 0);

  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

solution(numbers, target);
solution2(numbers, target);
