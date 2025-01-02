const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 자료구조를 사용하지 않은 풀이
function solution1(input) {
  const N = Number(input[0]);
  const M = Number(input[3]);
  const A = input[1].split(' ').map(Number);
  const B = input[2].split(' ').map(Number);
  const C = input[4].split(' ').map(Number).reverse();

  const queue = [];

  for (let i = 0; i < N; i++) {
    if (A[i] === 0) {
      queue.push(B[i]);
    }
  }

  const pushedQueue = [...C, ...queue].reverse();

  return pushedQueue.slice(0, M).join(' ');
}

console.log(solution1(input));

// 기본 자료구조를 사용한 풀이
function solution2(input) {
  return input;
}

console.log(solution2(input));
