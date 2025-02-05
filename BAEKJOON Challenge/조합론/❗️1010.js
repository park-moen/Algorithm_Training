const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const t = parseInt(input[0]);
  const result = [];

  function combination(n, k) {
    const currentK = k > n - k ? n - k : k;
    let result = 1;

    for (let i = 1; i <= currentK; i++) {
      result = (result * (n - i + 1)) / i;
    }

    return result;
  }

  for (let i = 1; i <= t; i++) {
    const [N, M] = input[i].split(' ').map(Number);
    const answer = combination(M, N);

    result.push(answer);
  }

  return result.join('\n');
}

console.log(solution(input));
