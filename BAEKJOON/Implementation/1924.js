// 1번 방법
const fs = require('fs');
const [m, d] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let totalDay = 0;

for (let i = 0; i < m - 1; i++) {
  totalDay += month[i];
}

totalDay = (totalDay + d) % 7;

console.log(week[totalDay]);

// 2번 방법
console.log(week[new Date('2007-' + m + '-' + d).getDay()]);
