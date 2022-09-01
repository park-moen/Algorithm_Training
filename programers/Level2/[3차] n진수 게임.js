function solution(n, t, m, p) {
  let answer = '';
  let baseString = '';

  for (let i = 0; i < t * m; i++) {
    baseString += i.toString(n);
  }

  for (let i = p; i <= baseString.length; i += m) {
    if (answer.length === t) {
      break;
    }

    answer += baseString[i - 1].toUpperCase();
  }

  return answer;
}

const n = 10;
const t = 12;
const m = 2;
const p = 1;

solution(n, t, m, p);
