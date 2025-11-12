function solution(n) {
  const REPEAT_WORD = '수박';
  const repeatWordCount = n / 2;

  return n % 2 === 0
    ? REPEAT_WORD.repeat(repeatWordCount)
    : REPEAT_WORD.repeat(repeatWordCount) + '수';
}

function secondSolution(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push('수');
    } else {
      result.push('박');
    }
  }

  return result.join('');
}

const n = 7;

console.log(solution(n));
console.log(secondSolution(n));
