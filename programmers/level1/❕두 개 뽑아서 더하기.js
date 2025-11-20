// ! 재귀 조합 알고리즘은 2개의 조합으로 비효율적인 방법
// ! 함수 호출 스택: 재귀마다 새로운 실행 컨텍스트 생성
// ! 2개의 조합이라면 2중 for문이 더 효율적임. 최소 3개 조합인 경우에 재귀 조합이 적합
function solution(numbers) {
  const result = new Set();

  const combination = (current, start) => {
    if (current.length === 2) {
      const sum = current.reduce((acc, cur) => acc + cur, 0);

      result.add(sum);
      return;
    }

    for (let i = start; i < numbers.length; i++) {
      current.push(numbers[i]);
      combination(current, i + 1);
      current.pop();
    }
  };

  combination([], 0);

  return [...result].sort((a, b) => a - b);
}

function secondSolution(numbers) {
  const result = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }

  return [...result].sort((a, b) => a - b);
}

const numbers = [5, 0, 2, 7];

console.log(solution(numbers));
console.log(secondSolution(numbers));
