const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// 브루트포스로 소수 찾는 방법
/**
 *
 * @param {number[]} input
 */
function firstSolution(input) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  function solution(input) {
    const list = input.slice(0, input.length - 1);

    const result = [];
    list.forEach(el => {
      let count = 0;
      for (let i = el + 1; i <= el * 2; i++) {
        if (isPrime(i)) {
          count++;
        }
      }

      result.push(count);
    });

    return result.join("\n");
  }

  console.log(solution(input));
}

firstSolution(input);

// 에라토스테네스의 체를 사용해서 소수 찾는 방법
/**
 *
 * @param {number[]} input
 * @returns string
 */
function secondSolution(input) {
  function sieve(max) {
    const isPrime = new Array(max + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i <= Math.sqrt(max); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= max; j += i) {
          isPrime[j] = false;
        }
      }
    }

    return isPrime;
  }

  function solution(input) {
    const list = input.slice(0, input.length - 1);
    const max = Math.max(...list);
    const isPrime = sieve(max * 2);

    return list
      .map(el => {
        let count = 0;
        for (let i = el + 1; i <= el * 2; i++) {
          if (isPrime[i]) {
            count++;
          }
        }

        return count;
      })
      .join("\n");
  }

  console.log(solution(input));
}

secondSolution(input);
