const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(inputLines) {
  const n = Number(inputLines[0]);

  function isPalindromeWithCount(str, left, right) {
    if (left >= right) return { result: 1, count: 1 };
    else if (str[left] !== str[right]) return { result: 0, count: 1 };
    else {
      const inner = isPalindromeWithCount(str, left + 1, right - 1);

      return {
        result: inner.result,
        count: inner.count + 1,
      };
    }
  }

  const output = [];

  for (let i = 1; i <= n; i++) {
    const { result, count } = isPalindromeWithCount(
      inputLines[i],
      0,
      inputLines[i].length - 1
    );
    output.push(`${result} ${count}`);
  }

  return output.join('\n');
}

console.log(solution(input));
