function solution(s) {
  const mid = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}

function secondSolution(s) {
  const mid = Math.floor(s.length / 2);
  const start = s.length % 2 === 0 ? mid - 1 : mid;

  return s.slice(start, start + (s.length % 2 === 0 ? 2 : 1));
}

function thirdSolution(s) {
  if (typeof s !== 'string') return;

  const mid = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.substring(mid - 1, mid + 1)
    : s.substring(mid, mid + 1);
}

const s = 'q';

console.log(solution(s));
console.log(secondSolution(s));
console.log(thirdSolution(s));
