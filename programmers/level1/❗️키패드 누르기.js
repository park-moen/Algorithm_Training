/**
 *
 * @param {number[]} pos1
 * @param {number[]} pos2
 */
function getDistance(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

/**
 *
 * @param {number[]} numbers
 * @param {string} hand
 * @returns
 */

function solution(numbers, hand) {
  const keypadLayout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const keypad = {};
  for (let i = 0; i < keypadLayout.length; i++) {
    for (let j = 0; j < keypadLayout[i].length; j++) {
      keypad[keypadLayout[i][j]] = [i, j];
    }
  }

  console.log('keypad', keypad);

  let left = '*';
  let right = '#';
  let result = '';

  for (const num of numbers) {
    if ([1, 4, 7].includes(num)) {
      result += 'L';
      left = num;
    } else if ([3, 6, 9].includes(num)) {
      result += 'R';
      right = num;
    } else {
      const leftDist = getDistance(keypad[left], keypad[num]);
      const rightDist = getDistance(keypad[right], keypad[num]);

      if (leftDist < rightDist || (leftDist === rightDist && hand === 'left')) {
        result += 'L';
        left = num;
      } else {
        result += 'R';
        right = num;
      }
    }
  }

  return result;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

console.log(solution(numbers, hand));
