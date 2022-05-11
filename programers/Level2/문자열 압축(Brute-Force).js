const s1 = 'aabbaccc';
const s2 = 'ababcdcdababcdcd';
const s3 = 'abcabcdede';
const s4 = 'abcabcabcabcdededededede';
const s5 = 'xababcdcdababcdcd';

function solution(s) {
  const answer = [s.length];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let count = 1;
    let compressed = '';
    for (let j = 0; j < s.length; j += i) {
      const prev = s.substring(j, j + i);
      const next = s.substring(j + i, j + i * 2);

      if (prev === next) {
        count++;
      } else {
        if (count === 1) {
          compressed += prev;
        } else {
          compressed += String(count) + prev;
          count = 1;
        }
      }
    }

    answer.push(compressed.length);
  }

  return Math.min(...answer);
}

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
console.log(solution(s5));
