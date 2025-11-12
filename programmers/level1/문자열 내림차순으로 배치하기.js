function solution(s) {
  return [...s].sort((a, b) => (a < b ? 1 : -1)).join('');
}

const s = 'Zbcdefg';

console.log(solution(s));
