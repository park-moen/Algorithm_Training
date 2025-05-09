function solution1(s) {
  let answer = '';
  const centerIndex = parseInt(s.length / 2);

  if (s.length % 2 === 0) {
    answer = s.slice(centerIndex - 1, centerIndex + 1);
  } else {
    answer = s[centerIndex];
  }

  return answer;
}

function solution2(s) {
  const mid = parseInt(s.length / 2);

  return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}

const s1 = 'abcde';
const s2 = 'qwer';

solution1(s2);
solution2(s1);
