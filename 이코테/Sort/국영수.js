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

// 반환값이 0보다 작으면 비교 함수의 첫번째 인수를 우선 정렬하고, 0이면 정렬하지 않고 0보다 크면 두번째 인수를 우선하여 정렬
