const fs = require('fs');
const [n, ...input] = fs.readFileSync('input.txt').toString().trim().split('\n');

const member = input.map(v => {
  const [name, kor, eng, math] = v.split(' ');

  return {
    name,
    kor: parseInt(kor),
    eng: parseInt(eng),
    math: parseInt(math),
  };
});

function sortFun(a, b) {
  if (a.kor !== b.kor) return b.kor - a.kor;
  else if (a.eng !== b.eng) return a.eng - b.eng;
  else if (a.math !== b.math) return b.math - a.math;
  else return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

const result = member.sort(sortFun).map(v => v.name);

console.log(result.join('\n'));

const x = 'a';
const y = 'b';

console.log(x < y);
