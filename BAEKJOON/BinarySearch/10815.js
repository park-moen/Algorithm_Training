const fs = require('fs');
const [n, nArr, m, mArr] = fs.readFileSync('input.txt').toString().split('\n');
const cards = nArr
  .split(' ')
  .map(card => +card)
  .sort((a, b) => a - b);
const intNums = mArr.split(' ').map(ints => +ints);

function binarySearch(cards, target) {
  let answer = 0;

  let start = 0;
  let end = cards.length;

  while (end >= start) {
    const mid = parseInt((start + end) / 2);

    if (cards[mid] === target) {
      return 1;
    } else if (cards[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

function solution(intNums) {
  let answer = '';
  for (let val of intNums) {
    answer += binarySearch(cards, val) + ' ';
  }

  console.log(answer.trim());
}

solution(intNums);
