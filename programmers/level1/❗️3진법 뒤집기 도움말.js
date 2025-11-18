function ternaryToDecimal(ternaryString) {
  let result = 0;
  let power = 0;

  for (let i = ternaryString.length - 1; i >= 0; i--) {
    const digit = Number(ternaryString[i]);
    result += digit * Math.pow(3, power);
    power++;
  }

  return result;
}

function decimalToTernary(decimal) {
  let ternary = '';
  let copyDecimal = decimal;

  while (copyDecimal > 0) {
    ternary = (copyDecimal % 3) + ternary;
    copyDecimal = Math.floor(copyDecimal / 3);
  }

  return ternary;
}

function solution(n) {
  const ternary = decimalToTernary(n);
  const reverseTernary = [...ternary].reverse().join('');
  const revertDecimal = ternaryToDecimal(reverseTernary);

  return revertDecimal;
}

function secondSolution(n) {
  const changeReverseTernary = n.toString(3).split('').reverse().join('');

  return parseInt(changeReverseTernary, 3);
}

const n = 45;

console.log(solution(n));
console.log(secondSolution(n));
