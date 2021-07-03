function solution(s, e) {
  let answer;

  const dis = Array.from({ length: 10001 }, () => 0);
  const ch = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;

      if (nx >= 0 && nx <= 10000 && ch[nx] === 0) {
        queue.push(nx);
        ch[nx] = 1;
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

console.log(solution(5, 14));
