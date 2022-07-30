const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

function solution(input) {
  let result = 0;
  const splitInteger = input.split('-');

  if (splitInteger[0].includes('+')) {
    result = splitInteger[0]
      .split('+')
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);
  } else {
    result = Number(splitInteger[0]);
  }

  for (let i = 1; i < splitInteger.length; i++) {
    if (splitInteger[i].includes('+')) {
      result -= splitInteger[i]
        .split('+')
        .reduce((acc, cur) => Number(acc) + Number(cur), 0);
    } else {
      result -= Number(splitInteger[i]);
    }
  }

  return result;
}

console.log(solution(input));
