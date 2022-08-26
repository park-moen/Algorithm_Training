function solution(n) {
  const answer = [];
  function hanoi(n, from, to, via) {
    console.log(n, from, to, via);
    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(n - 1, from, via, to);
      answer.push([from, to]);
      hanoi(n - 1, via, to, from);
    }
  }

  hanoi(n, 1, 3, 2);

  return answer;
}

const n = 3;

solution(n);
