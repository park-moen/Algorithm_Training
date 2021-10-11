const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const A = input[0].split(' ').map(el => +el);
input = input.slice(1);

function solution(a, edges) {
  const tree = Array.from({ length: a.length }, () => []);

  for (let val of edges) {
    const [u, v] = val.split(' ').map(el => +el);

    tree[u].push(v);
    tree[v].push(u);
  }

  const stack = [[0, -1]];
  const visit = Array.from({ length: a.length }, () => false);

  let answer = 0;
  while (stack.length) {
    const [start, parent] = stack.pop();

    if (visit[start]) {
      console.log('x');
      a[parent] += a[start];
      answer += Math.abs(a[start]);
      continue;
    }

    stack.push([start, parent]);
    visit[start] = true;

    for (const next of tree[start]) {
      if (!visit[next]) {
        stack.push([next, start]);
      }
    }
  }

  return a[0] ? -1 : answer;
}

console.log(solution(A, input));
