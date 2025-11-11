function solution(arr, divisor) {
  const sliceArr = arr.slice().filter(value => value % divisor === 0);

  return sliceArr.length > 0 ? sliceArr.sort((a, b) => a - b) : [-1];
}

const arr = [5, 10];
const divisor = 5;

console.log(solution(arr, divisor));
