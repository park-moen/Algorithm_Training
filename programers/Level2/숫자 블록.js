function solution(begin, end) {
  const answer = new Array(end).fill(0);

  for (let i = begin; i < end; i++) {
    for (let j = 2; j < end; j++) {
      console.log(j);
      answer[j * i] = i;
    }
  }

  console.log(answer);
  return answer;
}

const begin = 1;
const end = 10;

solution(begin, end);
