function wrongSolution(s) {
  const changNum = Number(s);

  if (Number.isNaN(changNum)) {
    return false;
  }
  const totalDigits = String(changNum).length;

  return totalDigits === 4 || totalDigits === 6 ? true : false;
}

// ! Number(counterexample)를 진행하면 지수 계산으로 10e2는 10^2를 계산해서 1000을 반환
// const counterexample = '10e2';
// console.log(wrongSolution(counterexample));

function solution(s) {
  const sLen = s.length;

  return sLen === 4 || sLen === 6 ? [...s].every(value => !isNaN(value)) : false;
}

const s = '1008e2';
console.log(solution(s));

// console.log(isNaN('1'));
