function solution(n) {
  const digits = Math.floor(Math.log10(n) + 1);
  const result = [];

  for (let i = 0; i < digits; i++) {
    result.push(Math.floor(n / Math.pow(10, i)) % 10);
  }

  return result;
}

function secondSolution(n) {
  const result = [];
  let sliceParam = n;

  while (sliceParam > 0) {
    result.push(sliceParam % 10);
    sliceParam = Math.floor(sliceParam / 10);
  }

  return result;
}

console.log(secondSolution(123512));
