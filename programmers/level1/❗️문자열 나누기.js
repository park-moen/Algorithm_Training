/**
 *
 * @param {string} s
 * @returns number
 */
function solution(s) {
  let count = 0;
  let i = 0;

  while (i < s.length) {
    let xCount = 0;
    let otherCount = 0;
    let x = s[i];

    while (i < s.length) {
      if (x === s[i]) {
        xCount++;
      } else {
        otherCount++;
      }

      i++;

      if (xCount === otherCount) {
        break;
      }
    }

    count++;
  }

  return count;
}

const s = 'banana';
solution(s);
