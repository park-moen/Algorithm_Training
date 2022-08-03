const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

function solution(input) {
  const alphabetObj = {};
  let maxNumber = 9;
  let sum = 0;

  input.forEach(alphabet => {
    let size = 1;

    for (let i = alphabet.length - 1; i >= 0; i--) {
      const word = alphabet[i];

      if (alphabetObj[word]) {
        alphabetObj[word] += size;
      } else {
        alphabetObj[word] = size;
      }

      size *= 10;
    }
  });

  const sortMaxAlphabetArr = Object.entries(alphabetObj).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortMaxAlphabetArr.length; i++) {
    sum += sortMaxAlphabetArr[i][1] * maxNumber;
    maxNumber--;
  }

  return sum;
}

console.log(solution(input));
