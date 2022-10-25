var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [NMKX, ...restInput] = input;
const [N, M, K, X] = NMKX.split(' ').map(Number);
const rels = restInput.map(v => v.split(' ').map(Number));

const visited = [];
const dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
const cost = 1;
let adjs = new Array(N + 1).fill(null).map(_ => new Array());
let count = 0;

dist[X] = 0;

class Deque {
  constructor() {
    this.store = [];
    this.front = 0;
    this.rear = 0;
  }
  push(n) {
    this.store[this.rear] = n;
    this.rear++;
  }
  popLeft() {
    if (this.front < this.rear) {
      const ret = this.store[this.front];
      this.front++;
      return ret;
    }
  }
  popRight() {
    if (this.front < this.rear) {
      const ret = this.store[this.rear - 1];
      this.rear--;
      return ret;
    }
  }
  get length() {
    const v = this.rear - this.front;

    return v > 0 ? v : 0;
  }
}
const deq = new Deque();

for (let i = 0; i < rels.length; i++) {
  const [start, end] = rels[i];
  adjs[start].push(end);
}

deq.push(X);
visited[X] = true;

while (deq.length) {
  const node = deq.popLeft();

  adjs[node].forEach(adj => {
    if (!visited[adj] && dist[adj] > dist[node] + cost) {
      dist[adj] = dist[node] + cost;
      deq.push(adj);
      visited[adj] = true;
    }
  });
}

for (let i = 1; i < dist.length; i++) {
  if (dist[i] === K) {
    console.log(i);
    count++;
  }
}

if (count === 0) {
  console.log(-1);
}
