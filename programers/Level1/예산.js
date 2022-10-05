function solution(d, budget) {
  let count = 0;
  let index = 0;

  d.sort((a, b) => a - b);

  while (budget >= d[index]) {
    budget -= d[index];
    count++;
    index++;
  }

  return count;
}

const d = [1, 3, 2, 5, 4];
const budget = 9;

solution(d, budget);
