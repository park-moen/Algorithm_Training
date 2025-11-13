function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return totalPrice > money ? totalPrice - money : 0;
}

// ! 가우스 공식 사용, 가우스 공식을 적용할 수 있는 근거에 대해 학습하기
function secondSolution(price, money, count) {
  return Math.max((price * count * (count + 1)) / 2 - money, 0);
}

const price = 3;
const money = 20;
const count = 4;

console.log(solution(price, money, count));
console.log(secondSolution(price, money, count));
