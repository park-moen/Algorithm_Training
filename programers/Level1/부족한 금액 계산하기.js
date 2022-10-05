function solution(price, money, count) {
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return sum > money ? sum - money : 0;
}

// 가우스 등차수열의 합 공식을 활용한 문제 풀이
function solution2(price, money, count) {
  const answer = (price * count * (count + 1)) / 2 - money;

  return answer > 0 ? answer : 0;
}

const price = 1;
const money = 20;
const count = 4;

console.log(solution(price, money, count));
console.log(solution2(price, money, count));
