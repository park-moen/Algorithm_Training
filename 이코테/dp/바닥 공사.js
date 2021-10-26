function solution(n) {
  const d = Array.from({ length: 1001 }, () => 0);
  d[1] = 1;
  d[2] = 3;

  for (let i = 3; i <= n; i++) d[i] = (d[i - 1] + d[i - 2] * 2) % 793796;

  return d[n];
}

console.log(solution(4));
