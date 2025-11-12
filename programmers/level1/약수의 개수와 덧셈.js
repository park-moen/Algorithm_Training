function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let divisors = [];

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisors.push(j);

        if (j !== i / j) {
          divisors.push(i / j);
        }
      }
    }

    if (divisors.length % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }

  return result;
}

const left = 13;
const right = 17;

solution(left, right);
