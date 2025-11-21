const { rmSync } = require('fs');

function solution(s) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = s;
  for (let i = 0; i < words.length; i++) {
    if (result.indexOf(words[i]) !== -1) {
      result = result.replaceAll(words[i], String(i));
    }
  }

  return result;
}

function secondSolution(s) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = s;
  for (let i = 0; i < words.length; i++) {
    if (!Number.isNaN(Number(result))) {
      break;
    }

    const splitToWord = result.split(words[i]);
    result = splitToWord.join(i);
  }

  return Number(result);
}

const s = '23four5six7sixfour';
console.log(solution(s));
console.log(secondSolution(s));
console.log(thirdSolution(s));
