const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let count = 0;
  const danceSet = new Set(['ChongChong']);

  for (const user of input.slice(1)) {
    const [a, b] = user.split(' ');

    if (danceSet.has(a) || danceSet.has(b)) {
      danceSet.add(a);
      danceSet.add(b);
    }
  }

  return danceSet.size;
}

console.log(solution(input));
