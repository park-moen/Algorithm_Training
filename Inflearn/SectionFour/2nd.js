function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < Math.floor(num / 2); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];

  for (let val of arr) {
    let sum = '';

    while (val) {
      sum += val % 10;
      val = parseInt(val / 10);
    }
    sum = parseInt(sum);

    if (isPrime(sum)) answer.push(sum);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
