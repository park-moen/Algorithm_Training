const fs = require('fs');
const [n, ...input] = fs.readFileSync('input.txt').toString().trim().split('\n');

let member = input.map(v => {
  const [name, score] = v.split(' ');

  return {
    name,
    score: parseInt(score),
  };
});

member = member
  .sort((a, b) => a.score - b.score)
  .map(v => v.name)
  .join(' ');

console.log(member);
