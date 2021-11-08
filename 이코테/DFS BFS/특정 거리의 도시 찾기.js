const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m, k, x] = input
  .shift()
  .split(' ')
  .map(v => +v);

const answer = [];
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(v => +v);

  graph[x].push(y);
}

const distance = Array.from({ length: m + 1 }, () => -1);
distance[x] = 0;

const queue = [x];

while (queue.length) {
  const now = queue.shift();

  for (let nextNode of graph[now]) {
    if (distance[nextNode] === -1) {
      distance[nextNode] = distance[now] + 1;
      queue.push(nextNode);
    }
  }
}

let flag = -1;
for (let i = 1; i <= n; i++) {
  if (distance[i] === k) {
    answer.push(i);
    flag = 1;
  }
}

if (flag === -1) console.log(-1);
else {
  console.log(answer.join('\n'));
}
