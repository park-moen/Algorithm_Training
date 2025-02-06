const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let count = 0;
  const userSet = new Set();

  for (const line of input.slice(1)) {
    if (line === 'ENTER') {
      userSet.clear();
    } else if (!userSet.has(line)) {
      userSet.add(line);
      count++;
    }
  }

  return count;
}

console.log(solution(input));
