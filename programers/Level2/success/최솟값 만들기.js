function solution(A, B) {
  let answer = 0;
  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);

  sortA.forEach((_, i) => {
    answer += sortA[i] * sortB[i];
  });

  return answer;

  // return sortA.reduce((total, value, i) => total + value * sortB[i], 0);
}

const A1 = [1, 4, 2];
const B1 = [5, 4, 4];

const A2 = [1, 2];
const B2 = [3, 4];

solution(A1, B1);
