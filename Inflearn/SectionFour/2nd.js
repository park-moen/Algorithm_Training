function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  answer = [];

  // for (let val of arr) {
  //   let res = Number(val.toString().split('').reverse().join(''));

  //   if (isPrime(res)) answer.push(res);
  // }

  for (let val of arr) {
    let res = 0;

    while (val) {
      let temp = val % 10;
      res = res * 10 + temp;
      val = parseInt(val / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
