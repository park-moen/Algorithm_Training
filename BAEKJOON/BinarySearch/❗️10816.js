// lowerBound & upperBound를 활용해서 binarySearch를 푸는 문제

const fs = require('fs');
const [n, nArr, m, mArr] = fs.readFileSync('input.txt').toString().split('\n');
const cards = nArr
  .split(' ')
  .map(card => +card)
  .sort((a, b) => a - b);
const intNums = mArr.split(' ').map(intNum => +intNum);

function lowerBound(cards, target) {
  let start = 0;
  let end = cards.length;

  while (end > start) {
    const mid = parseInt((start + end) / 2);

    if (cards[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

function upperBound(cards, target) {
  let start = 0;
  let end = cards.length;

  while (end > start) {
    let mid = parseInt((start + end) / 2);

    if (cards[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

function solution(intNums) {
  let answer = '';

  for (let val of intNums) {
    answer += upperBound(cards, val) - lowerBound(cards, val) + ' ';
  }

  return answer.trim();
}

console.log(solution(intNums));
