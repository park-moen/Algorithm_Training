function solution(s, e) {
  let answer;
  let L = 0;

  const ch = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  queue.push(s);
  ch[s] = 1;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      let x = queue.shift();

      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx >= 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }

  return answer;
}

console.log(solution(5, 14));
