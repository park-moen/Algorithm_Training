const fs = require('fs');
const [n, m, ...input] = fs.readFileSync('input.txt').toString().trim().split(/\s+/);
const sequence = input.map(v => +v);

function lowerBound(seq, target, n) {
  let sp = 0;
  let ep = n - 1;

  while (sp < ep) {
    let mid = parseInt((sp + ep) / 2);

    if (seq[mid] >= target) ep = mid;
    else sp = mid + 1;
  }

  return ep;
}
function upperBound(seq, target, n) {
  let sp = 0;
  let ep = n - 1;

  while (sp < ep) {
    let mid = parseInt((sp + ep) / 2);

    if (seq[mid] > target) ep = mid;
    else sp = mid + 1;
  }

  return ep;
}

function solution(n, m, seq) {
  let answer = upperBound(sequence, m, n) - lowerBound(sequence, m, n);

  if (answer === 0) return -1;

  return answer;
}

console.log(solution(+n, +m, sequence));
