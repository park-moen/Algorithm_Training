function solution(n) {
  let answer = '';
  const numbers = [4, 1, 2];

  while (n) {
    answer = numbers[n % 3] + answer;
    n = parseInt((n - 1) / 3);
  }

  return answer;
}

console.log(solution(10));

// 다른 사람 풀이
// function solution(n) {
//   let answer = '';
//   let remainder = -1;

//   while (n) {
//     remainder = n % 3;
//     n = parseInt(n / 3);

//     if (remainder === 0) {
//       answer = 4 + answer;
//       n--;
//     } else if (remainder === 1) answer = 1 + answer;
//     else if (remainder === 2) answer = 2 + answer;
//   }

//   return answer;
// }

// 다른 사람 풀이 2
// function solution(n) {
//   let answer = '';
//   let rest = 0;

//   while (n) {
//     rest = n % 3;
//     n = parseInt(n / 3);

//     if (rest === 0) {
//       n -= 1;
//       rest = 4;
//     }

//     answer = rest + answer;
//   }

//   return answer;
// }
