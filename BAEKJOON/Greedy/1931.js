const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const meetingTime = input
  .map(meet => meet.split(' ').map(v => +v))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let result = 1;
let previousEndTime = Number(meetingTime[0][1]);

for (let i = 1; i < N; i++) {
  const currentStartTime = Number(meetingTime[i][0]);
  const currentEndTime = Number(meetingTime[i][1]);

  if (previousEndTime <= currentStartTime) {
    previousEndTime = currentEndTime;
    result++;
  }
}

console.log(result);

// 5
// 6 7
// 6 6
// 5 6
// 5 5
// 7 7
// 답 5
