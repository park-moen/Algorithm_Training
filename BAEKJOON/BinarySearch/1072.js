const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(/\s+/);

const X = Number(input[0]);
const Y = Number(input[1]);

// 1 ≤ X ≤ 1,000,000,000 조건으로 시간 복잡도 문제가 발생
// function solution(X, Y) {
//   const average = parseInt((Y / X) * 100);
//   let temp = average;
//   let cnt = 0;

//   while (temp === average) {
//     temp = parseInt((++Y / ++X) * 100);
//     cnt++;

//     if (temp >= 99) {
//       cnt = -1;
//       break;
//     }
//   }

//   console.log(cnt);
// }

// solution(X, Y);

function solution(X, Y) {
  let answer = 0;
  let sp = 0;
  let ep = 1000_000_000;
  const average = Math.floor((100 * Y) / X);

  if (average >= 99) return -1;

  while (ep >= sp) {
    const mid = parseInt((sp + ep) / 2);
    const curr_avg = Math.floor(((Y + mid) * 100) / (X + mid));

    if (curr_avg > average) {
      answer = mid;
      ep = mid - 1;
    } else {
      sp = mid + 1;
    }
  }

  return answer;
}

console.log(solution(X, Y));
