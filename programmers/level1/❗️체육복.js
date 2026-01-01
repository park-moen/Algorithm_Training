/**
 *
 * @param {number} n
 * @param {number[]} lost
 * @param {number[]} reserve
 */
function solution(n, lost, reserve) {
  const students = new Array(n + 2).fill(1);
  lost.forEach(studentNum => students[studentNum]--);
  reserve.forEach(studentNum => students[studentNum]++);

  for (let i = 1; i <= n; i++) {
    if (students[i] === 0) {
      if (students[i - 1] === 2) {
        students[i - 1]--;
        students[i]++;
      } else if (students[i + 1] === 2) {
        students[i + 1]--;
        students[i]++;
      }
    }
  }

  return students.slice(1, n + 1).filter(count => count >= 1).length;
}

/**
 *
 * @param {number} n
 * @param {number[]} lost
 * @param {number[]} reserve
 */
function secondSolution(n, lost, reserve) {
  const realLost = lost.filter(num => !reserve.includes(num)).sort((a, b) => a - b);
  const realReserve = reserve
    .filter(num => !lost.includes(num))
    .sort((a, b) => a - b);

  let canLend = n - realLost.length;

  realLost.forEach(lostStudent => {
    const lenderIndex = realReserve.findIndex(
      reserveStudent => Math.abs(reserveStudent - lostStudent) === 1
    );

    if (lenderIndex !== -1) {
      canLend++;
      realReserve.splice(lenderIndex, 1);
    }
  });

  return canLend;
}

const n = 5;
const lost = [2, 4, 3];
const reserve = [1, 3, 5];

console.log(solution(n, lost, reserve));
console.log(secondSolution(n, lost, reserve));
