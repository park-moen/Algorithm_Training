function solution(n) {
  const answer = String(n).split('');

  return answer.reduce((acc, cur) => acc + Number(cur), 0);
}

const n1 = 123;
const n2 = 928172;

console.log(solution(n2));
