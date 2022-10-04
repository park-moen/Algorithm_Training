function solution1(left, right) {
  function getDivisorCount(number) {
    const divisors = [];

    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) divisors.push(i);
    }

    return [...divisors, number].length;
  }

  let sum = 0;
  const array = [];

  for (let i = left; i <= right; i++) {
    array.push(i);
  }

  for (let i = 0; i < array.length; i++) {
    if (getDivisorCount(array[i]) % 2 === 0) {
      console.log(array[i]);
      sum += array[i];
    } else {
      sum -= array[i];
    }
  }

  return sum;
}

// 제곱근이 정수면 약수의 개수가 홀수다.
function solution2(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      sum -= i;
    } else {
      sum += i;
    }
  }

  return sum;
}

const left = 13;
const right = 17;

solution1(left, right);
solution2(left, right);
