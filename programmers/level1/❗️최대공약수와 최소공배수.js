function solution(n, m) {
  function calculateGcd(a, b) {
    if (b === 0) return a;

    return calculateGcd(b, a % b);
  }

  const gcd = calculateGcd(n, m);

  return [gcd, (n * m) / gcd];
}

function secondSolution(n, m) {
  function calculateGcd(originalA, originalB) {
    let a = originalA;
    let b = originalB;

    while (b !== 0) {
      const prev = b;
      b = a % b;
      a = prev;
    }

    return a;
  }

  const gcd = calculateGcd(n, m);

  return [gcd, (n * m) / gcd];
}

const n = 48;
const m = 18;
console.log(solution(n, m));
console.log(secondSolution(n, m));
