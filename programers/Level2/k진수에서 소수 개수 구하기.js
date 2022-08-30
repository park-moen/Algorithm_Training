function solution(n, k) {
  let answer = 0;
  const numbs = n
    .toString(k)
    .split('0')
    .map(v => +v);

  for (let i = 0; i < numbs.length; i++) {
    if (isPrime(numbs[i])) {
      answer++;
    }
  }

  return answer;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const n1 = 437674;
const k1 = 3;
const n2 = 110011;
const k2 = 10;

solution(n2, k2);

// Number.toString() 함수를 사용하지 않고 푼 문제
function solution2(n, k) {
  let answer = [];

  while (n > 0) {
    answer.unshift(n % k);
    n = Math.floor(n / k);
  }

  const convertedNums = answer.join('').split('0');

  let count = 0;

  for (let i = 0; i < convertedNums.length; i++) {
    const num = Number(convertedNums[i]);

    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
