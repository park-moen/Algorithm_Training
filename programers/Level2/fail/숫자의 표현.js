function solution(n) {
  let count = 1;

  for (let i = 1; i < n; i++) {
    let sum = i;
    let m1 = i;

    while (true) {
      if (sum === n) {
        count++;
        break;
      } else if (sum > n) {
        break;
      }

      m1 += 1;
      sum += m1;
    }
  }

  return count;
}

solution(10000);
