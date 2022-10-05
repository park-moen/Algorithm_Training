function solution(n) {
  let ternary = [];

  while (n) {
    ternary.push(n % 3);
    n = parseInt(n / 3);
  }

  let decimal = 0;

  while (ternary.length) {
    const len = ternary.length - 1;
    const bit = ternary.shift();

    decimal += bit * 3 ** len;
  }

  return decimal;
}

function solution2(n) {
  const changeReverseTernary = n.toString(3).split('').reverse().join('');

  return parseInt(changeReverseTernary, 3);
}

const n = 125;
solution(n);
solution2(n);
