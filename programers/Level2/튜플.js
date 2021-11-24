function solution(s) {
  let hash = new Map();
  const tempArr = [];

  let temp = '';
  for (let i = 0; i < s.length; i++) {
    if (!Number.isNaN(+s[i])) temp += s[i];

    if (s[i] === ',') {
      tempArr.push(+temp);
      temp = '';
    }
  }

  tempArr.push(+temp);

  for (let val of tempArr) {
    if (hash.has(val)) hash.set(val, hash.get(val) + 1);
    else hash.set(val, 1);
  }

  hash = new Map([...hash].sort((a, b) => b[1] - a[1]));

  return [...hash.keys()];
}

const s1 = '{{2},{2,1},{2,1,3},{2,1,3,4}}';
const s2 = '{{1,2,3},{2,1},{1,2,4,3},{2}}';
const s3 = '{{20,111},{111}}';
const s4 = '{{123}}';
const s5 = '{{4,2,3},{3},{2,3,4,1},{2,3}}';

console.log(solution(s1));

// 다른 사람 풀이

// const createSets = s =>
//   s
//     .slice(2, s.length - 2)
//     .split('},{')
//     .map(el => el.split(','));

// const compare = (a, b) => a.length - b.length;

// function solution(s) {
//   const sets = createSets(s).sort(compare);
//   let result = [...sets[0]];

//   for (let i = 1; i < sets.length; i++) {
//     for (const r of result) {
//       sets[i] = sets[i].filter(set => set !== r);
//     }
//     result.push(...sets[i]);
//   }
// }
