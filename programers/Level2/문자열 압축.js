function solution(s) {
  const answer = [s.length];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let cnt = 1;
    let string = '';

    for (let j = 0; j < s.length; j += i) {
      const first = s.substring(j, j + i);
      const second = s.substring(j + i, j + i * 2);

      if (first === second) cnt++;
      else {
        if (cnt === 1) string += first;
        else {
          string += cnt + first;
          cnt = 1;
        }
      }
    }

    answer.push(string.length);
  }

  console.log(answer);

  return Math.min(...answer);
}

const s1 = 'aabbaccc';
const s2 = 'ababcdcdababcdcd';
const s3 = 'abcabcdede';
const s4 = 'abcabcabcabcdededededede';
const s5 = 'xababcdcdababcdcd';

console.log(solution(s2));
console.log(solution2(s2));
