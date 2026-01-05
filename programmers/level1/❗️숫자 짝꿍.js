/**
 *
 * @param {string} X
 * @param {string} Y
 * @returns
 */
function solution(X, Y) {
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  for (const digit of X) {
    countX[digit]++;
  }

  for (const digit of Y) {
    countY[digit]++;
  }

  let result = '';
  for (let i = 9; i >= 0; i--) {
    const commonDigit = Math.min(countX[i], countY[i]);

    result += String(i).repeat(commonDigit);
  }

  if (result === '') {
    return '-1';
  }

  if (result[0] === '0') {
    return '0';
  }

  return result;
}

const X = '5525';
const Y = '1255';

console.log(solution(X, Y));
