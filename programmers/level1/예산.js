function solution(d, budget) {
  const sortD = [...d].sort((a, b) => a - b);
  let currentAmount = 0;
  let count = 0;

  for (let i = 0; i < sortD.length; i++) {
    currentAmount += sortD[i];
    if (currentAmount > budget) {
      break;
    }

    count++;
  }

  return count;
}

function secondSolution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      budget -= price;
      const canBuy = budget >= 0;

      return canBuy ? count + 1 : count + 0;
    }, 0);
}

const d = [1, 3, 2, 5, 4];
const budget = 9;

console.log(solution(d, budget));
console.log(secondSolution(d, budget));
