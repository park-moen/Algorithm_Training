const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const city = input.map(line => line.split(' ').map(Number));
const house = [];
const chicken = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) house.push([i, j]);
    else if (city[i][j] === 2) chicken.push([i, j]);
  }
}

const getMinDistance = () => {
  let sum = 0;

  house.forEach(([hx, hy]) => {
    let min = Infinity;

    chicken.forEach((_, index) => {
      if (check[index] === true) {
        const [cx, cy] = chicken[index];
        min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
    });
    sum += min;
  });

  return sum;
};

const check = new Array(chicken.length).fill(false);
let answer = Infinity;

const DFS = (idx, cnt) => {
  if (cnt === m) {
    answer = Math.min(answer, getMinDistance());
    return;
  } else {
    for (let i = idx; i < chicken.length; i++) {
      if (check[i] === true) continue;
      check[i] = true;
      DFS(i, cnt + 1);
      check[i] = false;
    }
  }
};

DFS(0, 0);
console.log(answer);
