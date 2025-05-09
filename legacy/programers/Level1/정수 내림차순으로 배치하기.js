function solution(n) {
  const descendingN = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');

  return Number(descendingN);
}

const n = 118372;

console.log(solution(n));
