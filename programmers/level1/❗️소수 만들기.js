function solution(num) {
  const max = Math.max(...num);
  const maxSum = max * 3;

  const sieve = new Array(maxSum).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(maxSum); i++) {
    if (sieve[i]) {
      for (let j = i * i; j < maxSum; j += i) {
        sieve[j] = false;
      }
    }
  }

  let count = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      const sum = current.reduce((acc, cur) => acc + cur, 0);
      if (sieve[sum]) {
        count++;
      }

      return;
    }

    for (let i = start; i < num.length; i++) {
      combination([...current, num[i]], i + 1);
    }
  };

  combination([], 0);

  return count;
}

const num = [1, 2, 7, 6, 4];
console.log(solution(num));
