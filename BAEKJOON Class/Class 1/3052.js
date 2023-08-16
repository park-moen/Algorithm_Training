let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const userNum = [];

input.forEach(x => {
  const num = x % 42;

  if (userNum.indexOf(num) === -1) {
    userNum.push(num);
  }
});

console.log(userNum.length);
