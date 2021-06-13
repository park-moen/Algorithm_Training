function solution(s, e) {
  let answer;
  const ch = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  ch[s] = 1;
  queue.push(s);
  let L = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let x = queue.shift();

      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx < 10001 && ch[nx] === 0) {
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
