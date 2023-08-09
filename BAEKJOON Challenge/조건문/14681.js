const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const [x, y] = input.map(v => +v);
  solution(x, y);
  process.exit();
});

function solution(x, y) {
  if (x >= 0 && y >= 0) {
    console.log(1);
  } else if (x < 0 && y >= 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
}
