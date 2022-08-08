const fs = require('fs');
const [N, ...input] = fs.readFileSync('input.txt').toString().trim().split('\n');

function solution(n, words) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    const word = words[i];

    let previousAlphabet = word[0];
    let flag = 1;

    for (let j = 1; j < word.length; j++) {
      if (previousAlphabet === word[j]) continue;

      if (word.slice(j).includes(previousAlphabet)) {
        flag = 0;
        break;
      } else {
        previousAlphabet = word[j];
      }
    }

    if (flag) {
      result++;
    }
  }

  return result;
}

console.log(solution(N, input));
