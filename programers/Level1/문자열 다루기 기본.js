function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      const changeNumber = Number(s[i]);

      if (Number.isNaN(changeNumber)) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}

const s = '123';
const s2 = '1234';

console.log(solution(s));
