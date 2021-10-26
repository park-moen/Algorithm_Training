function solution(n, k) {
  const d = Array.from({ length: n }, () => 0);
  d[0] = k[0];
  d[1] = Math.max(k[0], k[1]);

  for (let i = 2; i < n; i++) {
    d[i] = Math.max(d[i - 1], d[i - 2] + k[i]);
  }

  return d[n - 1];
}

console.log(solution(6, [1, 3, 1, 5, 3, 2]));
