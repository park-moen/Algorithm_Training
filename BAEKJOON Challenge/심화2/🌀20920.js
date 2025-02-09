const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);

  const wordsAtLeastM = new Map();

  for (const word of input.slice(1)) {
    if (word.length < M) {
      continue;
    }

    if (wordsAtLeastM.has(word)) {
      wordsAtLeastM.set(word, [wordsAtLeastM.get(word)[0] + 1, word.length]);
    } else {
      wordsAtLeastM.set(word, [1, word.length]);
    }
  }

  function sortOfCondition(a, b) {
    const countOfWordA = a[1][0];
    const countOfWordB = b[1][0];
    const lengthOfWordA = a[1][1];
    const lengthOfWordB = b[1][1];

    if (countOfWordA !== countOfWordB) {
      return countOfWordB - countOfWordA;
    }

    if (lengthOfWordA !== lengthOfWordB) {
      return lengthOfWordB - lengthOfWordA;
    }

    return a[0].localeCompare(b[0]);
  }

  return [...wordsAtLeastM]
    .sort(sortOfCondition)
    .map(word => word[0])
    .join('\n');
}

console.log(solution(input));
