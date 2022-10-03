function solution1(numbers) {
  var answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

function solution2(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 0];
const numbers2 = [5, 8, 4, 0, 6, 7, 9];

console.log(solution2(numbers2));
