function solution1(x, n) {
  const answer = [];
  let index = 0;

  while (n) {
    index += x;
    answer.push(index);
    n--;
  }

  return answer;
}

function solution2(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

const x1 = 2;
const n1 = 5;

const x2 = -4;
const n2 = 2;

solution1(x2, n2);
solution2(x2, n2);
