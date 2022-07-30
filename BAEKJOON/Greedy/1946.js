const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
const testCaseCount = Number(input.shift());

function getMaxPassCount(testCase, N) {
  const benchMark = testCase[0][1];
  let currentpaperScore = testCase[0][0];
  let currentinterviewScore = testCase[0][1];
  let maxPassCount = 1;

  for (let i = 1; i < N; i++) {
    const paperScore = testCase[i][0];
    const interviewScore = testCase[i][1];

    if (benchMark > interviewScore) {
      if (currentpaperScore > paperScore || currentinterviewScore > interviewScore) {
        maxPassCount++;
        currentpaperScore = paperScore;
        currentinterviewScore = interviewScore;
      }
    }
  }

  return maxPassCount;
}

const list = [];

for (let i = 0; i < testCaseCount; i++) {
  let n = Number(input.shift());
  const testCase = input
    .slice(0, n)
    .map(v => v.split(' ').map(v => +v))
    .sort((a, b) => a[0] - b[0]);

  console.log(getMaxPassCount(testCase, n));

  input = input.slice(n);
}
