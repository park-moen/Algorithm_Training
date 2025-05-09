function solution(a, b) {
  let answer = '';

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      answer += '*';
    }
    answer += '\n';
  }

  return answer;
}

function solution2(a, b) {
  let answer = '';
  const row = '*'.repeat(a);

  for (let i = 0; i < b; i++) {
    answer += row;

    if (i < b - 1) {
      answer += '\n';
    }
  }

  return answer;
}

const a = 5;
const b = 3;

solution(a, b);
solution2(a, b);
