function countDivisors(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count += n / i === i ? 1 : 2;
    }
  }

  return count;
}

function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    const count = countDivisors(i);

    result += count > limit ? power : count;
  }

  return result;
}

function primeFactorization(n) {
  const factor = {};
  let divisor = 2;

  while (divisor <= Math.sqrt(n)) {
    while (n % divisor === 0) {
      factor[divisor] = (factor[divisor] || 0) + 1;
      n = n / divisor;
    }

    divisor++;
  }

  if (n > 1) {
    factor[n] = 1;
  }

  return factor;
}

function countDivisorWithPrimeFactors(n) {
  const factors = primeFactorization(n);
  let count = 1;

  for (const exponent of Object.values(factors)) {
    count *= exponent + 1;
  }

  return count;
}

function secondSolution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    const divisorCount = countDivisorWithPrimeFactors(i);

    result += divisorCount > limit ? power : divisorCount;
  }

  return result;
}

const number = 5;
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));
console.log(secondSolution(number, limit, power));
