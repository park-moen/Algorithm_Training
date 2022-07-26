// 1st 풀이
function solution1(n) {
  let answer = '';

  while (n) {
    if (n % 3 === 0) {
      answer = '4' + answer;
      n = n / 3 - 1;
    } else if (n % 3 === 1) {
      answer = '1' + answer;
      n = parseInt(n / 3);
    } else {
      answer = '2' + answer;
      n = parseInt(n / 3);
    }
  }

  return answer;
}

console.log(solution1(40));
console.log(solution1(21));

// 2nd 풀이
function solution2(n) {
  const number124 = [4, 1, 2];
  let answer = '';

  while (n) {
    answer = String(number124[n % 3]) + answer;
    n = n % 3 === 0 ? n / 3 - 1 : parseInt(n / 3);
  }

  return answer;
}

console.log(solution2(55));
console.log(solution2(14));

// 3rd 풀이
function solution3(n) {
  let answer = '';
  const numbers = [4, 1, 2];

  while (n) {
    answer = numbers[n % 3] + answer;
    n = parseInt((n - 1) / 3);
  }

  return answer;
}

console.log(solution3(60));
console.log(solution3(27));

// 4th 풀이
function solution4(n) {
  let answer = '';
  let number = n;

  const stopNumber = 2;
  const ternary = 3;
  const zeroToFour = '4';

  while (number > stopNumber) {
    const rest = number % ternary;

    if (rest === 0) {
      answer = zeroToFour + answer;
      number = Math.floor(number / ternary) - 1;
    } else {
      answer = rest + answer;
      number = Math.floor(number / ternary);
    }
  }

  if (number !== 0) {
    answer = number + answer;
  }

  return answer;
}

console.log(solution3(60));
console.log(solution3(27));
