function countOne(str) {
  return str.split('').reduce((sum, bit) => (bit === '1' ? (sum += 1) : sum), 0);
}

function solution(n) {
  let answer = n;
  let currentBinary = countOne(answer.toString(2));

  while (true) {
    const nextBinary = countOne((++answer).toString(2));

    if (currentBinary === nextBinary) {
      break;
    }
  }

  return answer;
}

const n1 = 78;
const n2 = 15;

solution(n1);
