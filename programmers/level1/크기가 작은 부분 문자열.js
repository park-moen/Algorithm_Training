function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const subNum = Number(t.slice(i, i + p.length));

    if (subNum <= Number(p)) {
      count++;
    }
  }

  return count;
}

const t = '3141592';
const p = '271';

console.log(solution(t, p));
