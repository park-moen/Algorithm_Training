function solution(x) {
  const sum = x
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  return x % sum === 0 ? true : false;
}

const arr1 = 10;
const arr2 = 11;
const arr3 = 13;

console.log(solution(arr1));
