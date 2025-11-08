function solution(n) {
  const squareRoot = Math.sqrt(n);

  return squareRoot % 1 === 0 ? Math.pow(squareRoot + 1, 2) : -1;
}

console.log(solution(121));
