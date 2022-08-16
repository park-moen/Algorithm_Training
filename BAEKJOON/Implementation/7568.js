const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const personnel = input.shift();
const physical = input.map(info => info.split(' ').map(v => +v));
const rank = [];

for (let i = 0; i < personnel; i++) {
  let count = 0;
  for (let j = 0; j < personnel; j++) {
    if (i !== j) {
      if (physical[i][0] < physical[j][0] && physical[i][1] < physical[j][1]) {
        count++;
      }
    }
  }

  rank.push(count + 1);
}

console.log(rank.join(' '));
