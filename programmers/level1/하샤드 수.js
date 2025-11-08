function solution(x) {
  const sumPlace = String(x)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);

  return x % sumPlace === 0;
}

solution(10);
