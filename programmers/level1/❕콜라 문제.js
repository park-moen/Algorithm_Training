function solution(a, b, n) {
  let currentBottle = n;
  let totalBottle = 0;

  while (currentBottle >= a) {
    const received = Math.floor(currentBottle / a) * b;
    totalBottle += received;
    currentBottle = received + (currentBottle % a);
  }

  return totalBottle;
}

console.log(solution(5, 3, 21));
