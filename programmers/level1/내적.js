function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

solution(a, b);
