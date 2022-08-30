function solution(begin, end) {
  const answer = new Array(end - begin + 1).fill(0);

  for (let i = begin; i <= end; i++) {
    answer[i - begin] = getMaxDivisor(i);
  }

  if (begin === 1) {
    answer[0] = 0;
  }

  return answer;
}

function getMaxDivisor(block) {
  for (let i = 2; i <= Math.sqrt(block); i++) {
    if (block % i === 0 && block / i <= 1e7) {
      return block / i;
    }
  }

  return 1;
}

const begin = 1;
const end = 10;

solution(begin, end);
