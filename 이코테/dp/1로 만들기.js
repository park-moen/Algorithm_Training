function solution(x) {
  const d = Array.from({ length: x + 1 }, () => 0);

  for (let i = 2; i <= x; i++) {
    d[i] = d[i - 1] + 1;

    if (i % 2 === 0) d[i] = Math.min(d[i], d[i / 2] + 1);
    if (i % 3 === 0) d[i] = Math.min(d[i], d[i / 3] + 1);
    if (i % 5 === 0) d[i] = Math.min(d[i], d[i / 5] + 1);
  }

  console.log(d);
}

console.log(solution(26)); // 3
