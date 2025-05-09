function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

const arr = [5, 5];

console.log(solution(arr));
