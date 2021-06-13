function solution(s, e) {
  let answer;
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  ch[s] = 1;
  dis[s] = 0;
  queue.push(s);

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx < 10001 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
